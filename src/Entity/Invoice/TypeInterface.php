<?php

namespace App\Entity\Invoice;

interface TypeInterface
{
    public function getId(): int;
    public function getName(): string;
    public function getIsDefault(): bool;
}