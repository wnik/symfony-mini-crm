<?php

namespace App\Entity\Country;

interface CountryInterface
{
    public function getName(): string;
    public function setName(string $name): void;
}