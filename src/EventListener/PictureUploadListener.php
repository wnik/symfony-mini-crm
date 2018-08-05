<?php

namespace App\EventListener;

use App\Bundle\BranchBundle\Entity\Branch;
use App\Bundle\EmployeeBundle\Entity\Employee;
use Doctrine\ORM\Event\LifecycleEventArgs;
use Doctrine\ORM\Event\PreUpdateEventArgs;
use App\Service\FileUploader;
use Symfony\Component\HttpFoundation\File\File;
use Symfony\Component\HttpFoundation\File\UploadedFile;

class PictureUploadListener
{
    private $uploader;

    public function __construct(FileUploader $uploader)
    {
        $this->uploader = $uploader;
    }

    public function prePersist(LifecycleEventArgs $args)
    {
        $entity = $args->getEntity();

        $this->uploadFile($entity);
    }

    public function preUpdate(PreUpdateEventArgs $args)
    {
        $entity = $args->getEntity();

        $this->uploadFile($entity);
    }

    private function uploadFile($entity)
    {
        if (!$entity instanceof Branch && !$entity instanceof Employee){
            return;
        }

        $file = $entity->getPicture();

        if ($file instanceof UploadedFile) {
            $fileName = $this->uploader->upload($file);
            $entity->setPicture($fileName);
        }

    }

}