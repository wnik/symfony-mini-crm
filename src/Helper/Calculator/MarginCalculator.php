<?php

namespace App\Helper\Calculator;

class MarginCalculator implements CalculatableInterface
{
    private $income;
    private $cost;

    public function __construct(float $income, float $cost)
    {
        $this->income = $income;
        $this->cost = $cost;
    }

    public function calculate()
    {
        return (($this->income - $this->cost) / $this->income) * 100;
    }
}