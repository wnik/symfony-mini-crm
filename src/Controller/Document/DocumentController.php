<?php

namespace App\Controller\Document;

use App\Entity\Document\Document;
use App\Form\Document\DocumentType;
use App\Service\FileManagement\FileManagementInterface;
use Symfony\Bundle\FrameworkBundle\Controller\Controller;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\Filesystem\Filesystem;
use Symfony\Component\Filesystem\Exception\IOExceptionInterface;
use Symfony\Component\HttpFoundation\Response;

class DocumentController extends Controller
{
    const STATUS_NAME_EMPTY = 0;
    const STATUS_EXISTS = 1;
    const STATUS_ADDED = 2;
    const STATUS_ADD_ERROR = 3;
    const STATUS_EMPTY_PATH = 4;
    const STATUS_DELETED = 5;
    const STATUS_NOT_EXISTS = 6;

    private $fileManagement;

    public function __construct(FileManagementInterface $fileManagement)
    {
        $this->fileManagement = $fileManagement;
    }

    public function index(string $file = '', Request $request): Response
    {
        if ($this->fileManagement->isFile($file)) {
            return $this->file($this->fileManagement->getFullPath($file));
        }

        $resources = $this->fileManagement->getDirectoriesAndFiles($file);

        return $this->render('Document/index.html.twig', array(
           'title' => 'CRM - Documents',
            'resources' => $resources,
            'subpath' => $request->get('file'),
        ));
    }

    public function add(): Response
    {
        $document = new Document();

        $form = $this->createForm(DocumentType::class, $document, array(
            'method' => 'POST',
        ));

        return $this->render('Document/add.html.twig', array(
            'title' => 'CRM - Documents add',
            'form' => $form->createView(),
        ));
    }

    public function addFolder(string $name = ''): JsonResponse
    {
        $name = trim($name);

        if (!$name) {
            return new JsonResponse(array(
                'success' => false,
                'payload' => array(
                    'code' => self::STATUS_NAME_EMPTY,
                    'message' => 'Missing folder name.',
                )
            ));
        }

        $fileSystem = new Filesystem();

        if ($fileSystem->exists($name)) {
            return new JsonResponse(array(
                'success' => false,
                'payload' => array(
                    'code' => self::STATUS_EXISTS,
                    'message' => 'Folder with the same name already exists.',
                )
            ));
        }

        try {
            $fileSystem->mkdir($this->getParameter('documents_directory') . DIRECTORY_SEPARATOR . $name, 755);
        } catch (IOExceptionInterface $exception) {
            return new JsonResponse(array(
                'success' => false,
                'payload' => array(
                    'code' => self::STATUS_ADD_ERROR,
                    'message' => 'There was an error during creating new folder. Please contact with your administrator.',
                )
            ));
        }

        return new JsonResponse(array(
            'success' => true,
            'payload' => array(
                'code' => self::STATUS_ADDED,
                'message' => 'Folder has been successfully created.',
            )
        ));

    }

    public function delete(Request $request): JsonResponse
    {
        $path = $request->get('path');

        $response = array(
            'success' => false,
            'payload' => array(
                'code' => self::STATUS_NOT_EXISTS,
                'message' => 'File does not exists.',
            ),
        );

        if (!$path) {
            $response = array(
                'success' => false,
                'payload' => array(
                    'code' => self::STATUS_EMPTY_PATH,
                    'message' => 'Missing path parameter.',
                ),
            );

            return new JsonResponse($response);
        }

        $fileSystem = new Filesystem();

        $fullPath = $this->getParameter('documents_directory') . DIRECTORY_SEPARATOR . $path;

        if ($fileSystem->exists($fullPath)) {
            $fileSystem->remove($fullPath);

            $response = array(
                'success' => true,
                'payload' => array(
                    'code' => self::STATUS_DELETED,
                    'message' => 'Resource has been deleted.',
                ),
            );
        }

        return new JsonResponse($response);
    }
}