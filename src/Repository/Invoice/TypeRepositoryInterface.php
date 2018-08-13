<?php

namespace App\Repository\Invoice;

use App\Entity\Invoice\TypeInterface;

interface TypeRepositoryInterface
{
    public function getDefault(): ?TypeInterface;
}