<?php

namespace App\Service;

use App\Repository\Employee\EmployeeRepository;
use Symfony\Component\Security\Core\Authentication\Token\Storage\TokenStorageInterface;

class UserManagement {

    private $tokenStorage;
    private $employeeRepository;

    public function __construct(TokenStorageInterface $tokenStorage, EmployeeRepository $repository)
    {
        $this->tokenStorage = $tokenStorage;
        $this->employeeRepository = $repository;
    }

    public function getLoggedAs()
    {
        return $this->tokenStorage->getToken()->getUser()->getUsername();
    }

    public function getPicture()
    {
        $employee = $this->employeeRepository->find(
            $this->tokenStorage->getToken()->getUser()->getEmployee()
        );

        if (!$employee) {
            return false;
        }

        return $employee->getPicture();
    }

}