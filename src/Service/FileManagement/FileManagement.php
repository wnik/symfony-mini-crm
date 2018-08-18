<?php

namespace App\Service\FileManagement;

use Symfony\Component\Finder\Finder;
use Symfony\Component\Filesystem\Filesystem;


class FileManagement implements FileManagementInterface
{
    private $fileSystem;
    private $finder;
    private $path;

    public function __construct(string $path)
    {
        $this->path = $path;
        $this->fileSystem = new Filesystem();
        $this->finder = new Finder();
    }

    public function getDirectoriesAndFiles(string $subpath = null): array
    {
        $subpath = $subpath ? $this->getFullPath($subpath) : null;

        if ($subpath && $this->fileSystem->exists($subpath) && is_dir($subpath)) {
            $this->finder->in($subpath)->depth(0);
        } else {
            $this->finder->in($this->path)->depth(0);
        }

        $this->finder->sortByType();

        return iterator_count($this->finder->getIterator()) ? iterator_to_array($this->finder->getIterator(), false) : array();
    }

    public function isFile(string $path = null): bool
    {
        $fullPath = $this->getFullPath($path);

        return $path && $this->fileSystem->exists($fullPath) && is_file($fullPath);
    }

    public function getFullPath(string $path = ''): string
    {
        return $this->path . DIRECTORY_SEPARATOR . $path;
    }
}