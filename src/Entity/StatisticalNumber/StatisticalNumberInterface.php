<?php

namespace App\Entity\StatisticalNumber;

interface StatisticalNumberInterface
{
    public function getNumber(): string;
    public function setNumber(string $number): void;
}