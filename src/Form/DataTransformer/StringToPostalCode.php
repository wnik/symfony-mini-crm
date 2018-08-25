<?php

namespace App\Form\DataTransformer;

use App\Entity\PostalCode\PostalCode;
use App\Repository\PostalCode\PostalCodeRepository;
use Symfony\Component\Form\DataTransformerInterface;

class StringToPostalCode implements DataTransformerInterface
{
    private $postalCodeRepository;

    public function __construct(PostalCodeRepository $postalCodeRepository)
    {
        $this->postalCodeRepository = $postalCodeRepository;
    }

    public function transform($postalCodeEntity)
    {
        if (!$postalCodeEntity && !$postalCodeEntity instanceof PostalCode) {
            return;
        }

        return $postalCodeEntity->getCode();
    }

    public function reverseTransform($postalCode)
    {
        if (!$postalCode) {
            return;
        }

        $postalCodeEntity = $this->postalCodeRepository->findOneBy(array(
            'code' => $postalCode,
        ));

        if ($postalCodeEntity) {
            return $postalCodeEntity;
        }

        $postalCodeEntity = new PostalCode();
        $postalCodeEntity->setCode($postalCode);

        return $postalCodeEntity;
    }
}