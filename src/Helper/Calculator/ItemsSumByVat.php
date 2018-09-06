<?php

namespace App\Helper\Calculator;

use Doctrine\Common\Collections\Collection;

class ItemsSumByVat implements ItemsSumByVatInterface
{
    private $items;
    private $keys = array('net', 'vat', 'gross');

    public function setItems(Collection $items): void
    {
        $this->items = $items;
    }

    public function getData()
    {
        if (!$this->items) {
            return array();
        }

        $data = array();

        foreach ($this->items as $item) {
            $this->setDefaultValues($data, $item->getVatRate()->getRate());

            $data[$item->getVatRate()->getRate()]['net'] = $data[$item->getVatRate()->getRate()]['net'] + ($item->getNet() * $item->getQuantity());
            $data[$item->getVatRate()->getRate()]['vat'] = $data[$item->getVatRate()->getRate()]['vat'] + (($item->getPrice() - $item->getNet()) * $item->getQuantity());
            $data[$item->getVatRate()->getRate()]['gross'] = $data[$item->getVatRate()->getRate()]['gross'] + ($item->getPrice() * $item->getQuantity());
        }

        return $data;
    }

    public function setDefaultValues(array &$data, int $rate)
    {
        foreach ($this->keys as $key) {
            if (!isset($data[$rate][$key])) {
                $data[$rate][$key] = 0;
            }
        }
    }
}