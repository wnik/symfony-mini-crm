<?php

namespace App\Factory\Invoice;

use App\Entity\Invoice\InvoiceInterface;

interface InvoiceFactoryInterface
{
    public function create(): InvoiceInterface;
    public function generateReference(): string;
}