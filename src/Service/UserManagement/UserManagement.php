<?php

namespace App\Service\UserManagement;

use Symfony\Component\Security\Core\Authentication\Token\Storage\TokenStorageInterface;

class UserManagement implements UserManagementInterface
{

    private $tokenStorage;

    public function __construct(TokenStorageInterface $tokenStorage)
    {
        $this->tokenStorage = $tokenStorage;
    }

    public function getLoggedAs(): string
    {
        return $this->tokenStorage->getToken()->getUser()->getUsername();
    }

    public function getEmployee()
    {
        return $this->tokenStorage->getToken()->getUser()->getEmployee();
    }

    public function getPicture()
    {
        $employee = $this->getEmployee();

        if (!$employee) {
            return false;
        }

        return $employee->getPicture();
    }

}