<?php

namespace App\Entity\Item;

interface UnitInterface
{
    public function getName(): string;
    public function setName(string $name): void;
}