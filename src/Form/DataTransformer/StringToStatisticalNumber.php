<?php

namespace App\Form\DataTransformer;

use App\Entity\StatisticalNumber\StatisticalNumber;
use App\Repository\StatisticalNumber\StatisticalNumberRepository;
use Symfony\Component\Form\DataTransformerInterface;

class StringToStatisticalNumber implements DataTransformerInterface
{
    private $statisticalNumberRepository;

    public function __construct(StatisticalNumberRepository $statisticalNumberRepository)
    {
        $this->statisticalNumberRepository = $statisticalNumberRepository;
    }

    public function transform($statisticalNumberEntity)
    {
        if (!$statisticalNumberEntity && !$statisticalNumberEntity instanceof StatisticalNumber) {
            return;
        }

        return $statisticalNumberEntity->getNumber();
    }

    public function reverseTransform($statisticalNumber)
    {
        if (!$statisticalNumber) {
            return;
        }

        $statisticalNumberEntity = $this->statisticalNumberRepository->findOneBy(array(
            'number' => $statisticalNumber,
        ));

        if ($statisticalNumberEntity) {
            return $statisticalNumberEntity;
        }

        $statisticalNumberEntity = new StatisticalNumber();
        $statisticalNumberEntity->setNumber($statisticalNumber);

        return $statisticalNumberEntity;
    }
}