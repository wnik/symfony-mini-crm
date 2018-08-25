<?php

namespace App\Entity\TaxId;

interface TaxIdInterface
{
    public function getNumber(): string;
    public function setNumber(string $number): void;
}