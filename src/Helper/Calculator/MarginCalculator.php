<?php

namespace App\Helper\Calculator;


class MarginCalculator implements CalculatableInterface
{
    private $income;
    private $cost;

    public function __construct(array $values, $entity = null)
    {
        $this->income = $values['income'] ?? null;
        $this->cost = $values['cost'] ?? null;
    }

    public function calculate()
    {
        return (($this->income - $this->cost) / $this->income) * 100;
    }
}