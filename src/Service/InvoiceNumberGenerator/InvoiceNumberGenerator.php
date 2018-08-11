<?php

namespace App\Service\InvoiceNumberGenerator;

use App\Repository\Invoice\InvoiceRepositoryInterface;

class InvoiceNumberGenerator implements InvoiceNumberGeneratorInterface
{
    private $invoiceRepository;

    public function __construct(InvoiceRepositoryInterface $invoiceRepository)
    {
        $this->invoiceRepository = $invoiceRepository;
    }

    public function generate(): string
    {
        $invoice = $this->invoiceRepository->getLast();

        if ($invoice) {
            return $invoice->getReference();
        }

        return '1/' . date('m') . '/' . date('Y');
    }
}