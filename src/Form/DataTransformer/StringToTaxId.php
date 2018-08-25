<?php

namespace App\Form\DataTransformer;

use App\Entity\TaxId\TaxId;
use App\Repository\TaxId\TaxIdRepository;
use Symfony\Component\Form\DataTransformerInterface;

class StringToTaxId implements DataTransformerInterface
{
    private $taxIdRepository;

    public function __construct(TaxIdRepository $taxIdRepository)
    {
        $this->taxIdRepository = $taxIdRepository;
    }

    public function transform($taxIdEntity)
    {
        if (!$taxIdEntity && !$taxIdEntity instanceof TaxId) {
            return;
        }

        return $taxIdEntity->getNumber();
    }

    public function reverseTransform($taxId)
    {
        if (!$taxId) {
            return;
        }

        $taxIdEntity = $this->taxIdRepository->findOneBy(array(
            'number' => $taxId,
        ));

        if ($taxIdEntity) {
            return $taxIdEntity;
        }

        $taxIdEntity = new TaxId();
        $taxIdEntity->setNumber($taxId);

        return $taxIdEntity;
    }
}