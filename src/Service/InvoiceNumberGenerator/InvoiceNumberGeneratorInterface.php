<?php

namespace App\Service\InvoiceNumberGenerator;

interface InvoiceNumberGeneratorInterface
{
    public function generate(): string;
}