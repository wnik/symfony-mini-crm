<?php

namespace App\Helper\Formatter;

interface PriceFormatterInterface
{
    public function formatPrice(float $price): string;
}