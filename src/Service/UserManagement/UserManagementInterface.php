<?php

namespace App\Service\UserManagement;

interface UserManagementInterface
{
    public function getLoggedAs(): string;
    public function getEmployee();
    public function getPicture();
}