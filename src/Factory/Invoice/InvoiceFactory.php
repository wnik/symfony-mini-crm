<?php

namespace App\Factory\Invoice;

use App\Entity\Invoice\Invoice;
use App\Entity\Invoice\InvoiceInterface;
use App\Service\InvoiceNumberGenerator\InvoiceNumberGeneratorInterface;

final class InvoiceFactory implements InvoiceFactoryInterface
{
    private $invoiceNumberGenerator;

    public function __construct(InvoiceNumberGeneratorInterface $invoiceNumberGenerator)
    {
        $this->invoiceNumberGenerator = $invoiceNumberGenerator;
    }

    public function create(): InvoiceInterface
    {
        return new Invoice();
    }

    public function generateReference(): string
    {
        return $this->invoiceNumberGenerator->generate();

    }
}