<?php

namespace App\Service;

use Doctrine\Common\Collections\Collection;
use Twig\Extension\AbstractExtension;
use Twig\TwigFunction;

class PropertySummary extends AbstractExtension
{
    public function getFunctions()
    {
        return array(
            new TwigFunction('propertySummary', array($this, 'sumProperty')),
        );
    }

    public function sumProperty(Collection $collection, string $method)
    {
        $sum = 0;

        foreach ($collection->getIterator() as $item) {
            $sum += $item->$method();
        }

        return $sum;
    }
}