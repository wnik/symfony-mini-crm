<?php

namespace App\Helper\Calculator;

use App\Helper\Formatter\PriceFormatterInterface;

class NettCalculator implements NettCalculatorInterface
{
    private $gross;
    private $vat;
    private $formatter;

    public function __construct(PriceFormatterInterface $priceFormatter)
    {
        $this->formatter = $priceFormatter;
    }

    public function setGross(float $gross): void
    {
        $this->gross = $gross;
    }

    public function setVat(int $vat): void
    {
        $this->vat = $vat;
    }

    public function calculate(): float
    {
        return $this->formatter->formatPrice($this->gross / (($this->vat / 100) + 1));
    }
}