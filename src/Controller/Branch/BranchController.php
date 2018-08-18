<?php

namespace App\Controller\Branch;

use App\Entity\Branch\Branch;
use App\Entity\Search\Search;
use App\Form\Branch\BranchType;
use Symfony\Bundle\FrameworkBundle\Controller\Controller;
use App\Form\SearchSidebarType;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Session\Session;

/**
 * Class BranchController
 * @package App\Controller\Branch
 */
class BranchController extends Controller
{

    /**
     * @return \Symfony\Component\HttpFoundation\Response
     */
    public function index(int $page, Request $request)
    {
        $search = new Search();

        $searchForm = $this->createForm(SearchSidebarType::class, $search);

        $searchForm->handleRequest($request);

        $searchQuery = null;

        if ($searchForm->isSubmitted() && $searchForm->isValid()) {
            $search = $searchForm->getData();

            $searchQuery = $search->getQuery();
        }

        $repository = $this->getDoctrine()->getRepository('App:Branch\Branch');

        $branches = $repository->findAllWithPagination($page, $searchQuery);

        $sidebars = array(
            $this->renderView('Branch/sidebars/search.html.twig', [
                'form' => $searchForm->createView(),
            ])
        );

        return $this->render('Branch/index.html.twig',[
                'title' => 'CRM - Branches',
                'branches' => $branches,
                'sidebars' => $sidebars,
            ]
        );
    }

    public function edit(int $id, Request $request)
    {
        $repository = $this->getDoctrine()->getRepository('App:Branch\Branch');
        $branch = $repository->find($id);

        $picture = $branch->getPicture();

        $form = $this->createForm(BranchType::class, $branch, array(
            'method' => 'PUT',
        ));

        $form->handleRequest($request);

        if ($form->isSubmitted() && $form->isValid()) {
            $branchForm = $form->getData();

            if ($picture && !$branchForm->getPicture()) {
                $branchForm->setPicture($picture);
            }

            $entityManager = $this->getDoctrine()->getManager();
            $entityManager->persist($branchForm);
            $entityManager->flush();

            $session = new Session();

            $session->getFlashBag()->add('success', 'Branch has been saved.');


            return $this->redirect($request->getUri());
        }

        return $this->render('Branch/edit.html.twig', [
                'title' => 'CRM - Branch edit',
                'branch' => $branch,
                'form' => $form->createView(),
            ]
        );
    }

    public function add(Request $request)
    {
        $branch = new Branch();

        $form = $this->createForm(BranchType::class, $branch, array(
            'method' => 'POST',
        ));

        $form->handleRequest($request);

        if ($form->isSubmitted() && $form->isValid()) {
            $branch = $form->getData();

            $entityManager = $this->getDoctrine()->getManager();
            $entityManager->persist($branch);
            $entityManager->flush();

            $session = new Session();

            $session->getFlashBag()->add('success', 'Branch has been added.');


            return $this->redirect($this->generateUrl('branches_edit', array('id' => $branch->getId())));
        }

        return $this->render('Branch/add.html.twig', [
                'title' => 'CRM - Add new branch',
                'form' => $form->createView(),
            ]
        );
    }

    public function delete(int $id, Request $request): JsonResponse
    {
        $response = array(
            'success' => false,
            'payload' => array()
        );

        $entityManager = $this->getDoctrine()->getManager();
        $branch = $entityManager->getRepository('BranchBundle:Branch')->find($id);

        if (!$branch) {
            return new JsonResponse($response);
        }

        $entityManager->remove($branch);
        $entityManager->flush();

        $response['success'] = true;

        return new JsonResponse($response);
    }

}