<?php

namespace App\Helper\Formatter;

class PriceFormatter implements PriceFormatterInterface
{
    public function formatPrice(float $price): string
    {
        return number_format($price, 2, '.', '');
    }
}