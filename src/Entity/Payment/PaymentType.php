<?php

namespace App\Entity\PaymentType;

use Doctrine\ORM\Mapping as ORM;
use App\Entity\PaymentType\PaymentTypeInterface;

/**
 * @ORM\Entity(repositoryClass="App\Repository\PaymentTypeRepository")
 */
Class PaymentType implements PaymentTypeInterface
{
    /**
     * @ORM\id
     * @ORM\GeneratedValue
     * @ORM\Column(type="integer")
     */
    private $id;

    /**
     * @ORM\Column(type="string")
     */
    private $name;

    /**
     * @ORM\Column(type="smallint")
     */
    private $days;

    /**
     * @ORM\OneToMany(targetEntity="App\Entity\Payment\Payment", mappedBy="type")
     */
    private $payments;

    public function getName(): string
    {
        return $this->name;
    }

    public function getDays(): int
    {
        return $this->days;
    }

    public function setName(string $name): void
    {
        $this->name = $name;
    }

    public function setDays(int $days): void
    {
        $this->days = $days;
    }

}