<?php

namespace App\Repository\Invoice;

use App\Entity\Invoice\TypeInterface;

interface TypeRepositoryInterface
{
    public function getFirst(): ?TypeInterface;
}