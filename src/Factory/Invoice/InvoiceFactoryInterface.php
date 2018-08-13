<?php

namespace App\Factory\Invoice;

use App\Entity\Invoice\InvoiceInterface;
use App\Entity\Invoice\TypeInterface;

interface InvoiceFactoryInterface
{
    public function create(): InvoiceInterface;
    public function generateReference(TypeInterface $type): string;
}