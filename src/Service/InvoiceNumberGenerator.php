<?php

namespace App\Service;

use Doctrine\ORM\EntityManagerInterface;

class InvoiceNumberGenerator
{
    private $entityManager;

    public function __construct(EntityManagerInterface $entityManager)
    {
        $this->entityManager = $entityManager;
    }

    public function generate()
    {

    }
}