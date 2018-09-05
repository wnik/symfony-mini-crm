<?php

namespace App\Helper\Calculator;

use App\Entity\Invoice\ItemInterface;

class ItemSumCalculator implements CalculatableInterface
{
    private $item;
    private $isNet = false;

    public function __construct(array $values, $entity = null)
    {
        $this->isNet = $values['isNet'] ?? false;
        $this->item = $entity;
    }

    public function calculate()
    {
        if (!$this->item instanceof ItemInterface) {
            return null;
        }

        if ($this->isNet) {
           return $this->item->getQuantity() * $this->item->getNet();
        } else {
            return $this->item->getQuantity() * $this->item->getPrice();
        }

    }
}