<?php

namespace App\Helper\Calculator;

use Doctrine\Common\Collections\Collection;

interface ItemsSumByVatInterface
{
    public function setItems(Collection $items): void;
    public function getData();
}