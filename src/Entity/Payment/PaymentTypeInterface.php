<?php

namespace App\Entity\Payment;

interface PaymentTypeInterface
{
    public function getName(): string;
    public function getDays(): int;
    public function setName(string $name): void;
    public function setDays(int $days): void;
}