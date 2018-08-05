<?php

namespace App\Factory\Invoice;

use App\Entity\Invoice\Invoice;
use App\Entity\Invoice\InvoiceInterface;
use App\Repository\Invoice\InvoiceRepositoryInterface;

final class InvoiceFactory implements InvoiceFactoryInterface
{
    private $invoiceRepository;

    public function __construct(InvoiceRepositoryInterface $invoiceRepository)
    {
        $this->invoiceRepository = $invoiceRepository;
    }

    public function create(): InvoiceInterface
    {
        return new Invoice();
    }

    public function generateReference()
    {
        $invoice = $this->invoiceRepository->getLast();

        if (!$invoice) {
            return '';
        }

        dump($invoice);

        return '';

    }
}