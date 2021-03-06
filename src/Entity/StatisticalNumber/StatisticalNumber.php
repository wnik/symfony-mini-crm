<?php

namespace App\Entity\StatisticalNumber;

use Doctrine\ORM\Mapping as ORM;

/**
 * @ORM\Entity(repositoryClass="App\Repository\StatisticalNumber\StatisticalNumberRepository")
 */
class StatisticalNumber implements StatisticalNumberInterface
{
    /**
     * @ORM\Id
     * @ORM\GeneratedValue
     * @ORM\Column(type="integer")
     */
    private $id;

    /**
     * @ORM\Column(type="integer")
     */
    private $number;

    /**
     * @ORM\OneToMany(targetEntity="App\Entity\Branch\Branch", mappedBy="statisticalNumber")
     */
    private $branches;

    /**
     * @ORM\OneToMany(targetEntity="App\Entity\Customer\Customer", mappedBy="statisticalNumber")
     */
    private $customers;

    /**
     * @return mixed
     */
    public function getId()
    {
        return $this->id;
    }

    /**
     * @param mixed $id
     */
    public function setId($id): void
    {
        $this->id = $id;
    }

    public function getNumber(): string
    {
        return $this->number;
    }

    public function setNumber(string $number): void
    {
        $this->number = $number;
    }

}