<?php

namespace App\Entity\City;

interface CityInterface
{
    public function getName(): string;
    public function setName(string $name): void;
}