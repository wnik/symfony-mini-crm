<?php

namespace App\Entity\Invoice;

use App\Entity\Customer\CustomerInterface;
use App\Entity\Currency\CurrencyInterface;
use App\Entity\Payment\PaymentInterface;
use Doctrine\Common\Collections\Collection;

interface InvoiceInterface
{
    public function getReference(): ?string;
    public function getType(): ?TypeInterface;
    public function getIssueDate(): ?\DateTimeInterface;
    public function getDueDate(): ?\DateTimeInterface;
    public function getCustomer(): ?CustomerInterface;
    public function getCurrency(): ?CurrencyInterface;
    public function getPayment(): ?PaymentInterface;
    public function getItems(): Collection;
    public function setReference(?string $reference): void;
    public function setType(TypeInterface $type): void;
    public function setIssueDate(\DateTimeInterface $date): void;
    public function setDueDate(\DateTimeInterface $date): void;
    public function setCustomer(CustomerInterface $customer): void;
    public function setCurrency(CurrencyInterface $currency): void;
    public function setPayment(PaymentInterface $payment): void;
    public function addItem(Item $item): Invoice;
    public function removeItem(Item $item): Invoice;
}