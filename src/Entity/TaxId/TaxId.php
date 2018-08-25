<?php

namespace App\Entity\TaxId;

use Doctrine\ORM\Mapping as ORM;

/**
 * @ORM\Entity(repositoryClass="App\Repository\TaxId\TaxIdRepository")
 */
class TaxId
{
    /**
     * @ORM\Id
     * @ORM\GeneratedValue
     * @ORM\Column(type="integer")
     */
    private $id;

    /**
     * @ORM\Column(type="string")
     */
    private $number;

    /**
     * @ORM\OneToMany(targetEntity="App\Entity\Branch\Branch", mappedBy="taxId")
     */
    private $branches;

    /**
     * @ORM\OneToMany(targetEntity="App\Entity\Customer\Customer", mappedBy="taxId")
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

    /**
     * @return mixed
     */
    public function getNumber()
    {
        return $this->number;
    }

    /**
     * @param mixed $number
     */
    public function setNumber($number): void
    {
        $this->number = $number;
    }


}