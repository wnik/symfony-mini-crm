<?php

namespace App\Entity\Payment;

use App\Entity\Invoice\InvoiceInterface;

interface PaymentInterface
{
    public function getType(): PaymentTypeInterface;
    public function getUpdatedAt(): ?\DateTimeInterface;
    public function getStatus(): bool;
    public function getInvoice(): InvoiceInterface;
    public function setType(PaymentTypeInterface $type): void;
    public function setUpdatedAt(\DateTime $dateTime): void;
    public function setStatus(bool $status): void;
    public function setInvoice(InvoiceInterface $invoice): void;
}