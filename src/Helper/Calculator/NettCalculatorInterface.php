<?php

namespace App\Helper\Calculator;

interface NettCalculatorInterface
{
    public function setGross(float $gross): void;
    public function setVat(int $vat): void;
    public function calculate(): float;
}