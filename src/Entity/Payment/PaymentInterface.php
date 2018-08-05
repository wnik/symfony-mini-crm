<?php

namespace App\Entity\Payment;

use App\Entity\PaymentType\PaymentTypeInterface;

interface PaymentInterface
{
    public function getType(): PaymentTypeInterface;
    public function getUpdatedAt(): ?\DateTimeInterface;
    public function getStatus(): bool;
}