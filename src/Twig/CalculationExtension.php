<?php

namespace App\Twig;

use App\Helper\Calculator\MarginCalculator;

class CalculationExtension extends \Twig_Extension
{
    public function getFunctions()
    {
        return array(
            new \Twig_Function('calculation', array($this, 'calculate')),
        );
    }

    public function calculate(string $type, float $total, float $cost)
    {
        if ($type == 'margin') {
            $calculator = new MarginCalculator($total, $cost);

            return $calculator->calculate();
        }

        return null;
    }
}