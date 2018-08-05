<?php

namespace App\Entity\Currency;

interface CurrencyInterface
{
    public function getName(): string;
    public function getISO(): string;
    public function setName(string $name): void;
    public function setISO(string $iso): void;
}