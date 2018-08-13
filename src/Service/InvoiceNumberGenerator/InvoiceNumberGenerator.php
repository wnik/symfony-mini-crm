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

    public function generate(int $typeId): string
    {
        $invoice = $this->invoiceRepository->getLast($typeId);

        if ($invoice) {
            $referenceArray = explode('/', $invoice->getReference());

            $reference = (int) $referenceArray[0] + 1;
            $reference = "{$reference}/$referenceArray[1]/{$referenceArray[2]}";

            return $reference;
        }

        return '1/' . date('m') . '/' . date('Y');
    }
}