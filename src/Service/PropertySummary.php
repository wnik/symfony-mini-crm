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

    public function sumProperty(Collection $collection, string $property)
    {
        $sum = 0;

//        dump($collection->getIterator());
        foreach ($collection->getIterator() as $i => $item) {
//            dump($item);
//            $sum += $item->{$property};
        }

        return $sum;
    }
}