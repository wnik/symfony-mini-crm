<?php

namespace App\Service\InvoiceNumberGenerator;

interface InvoiceNumberGeneratorInterface
{
    public function generate(int $typeId): string;
}