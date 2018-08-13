<?php

namespace App\Repository\Invoice;

use App\Entity\Invoice\InvoiceInterface;

interface InvoiceRepositoryInterface
{
    public function getLast(int $typeId): ?InvoiceInterface;
}