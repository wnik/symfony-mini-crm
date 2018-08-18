<?php

namespace App\Service\FileManagement;

interface FileManagementInterface
{
    public function getDirectoriesAndFiles(string $subpath = null): array;
    public function isFile(string $path = null): bool;
}