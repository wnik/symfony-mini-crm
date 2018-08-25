<?php

namespace App\Entity\PostalCode;

interface PostalCodeInterface
{
    public function getCode(): string;
    public function setCode(string $code): void;
}