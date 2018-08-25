<?php

namespace App\Entity\PostalCode;

use Doctrine\ORM\Mapping as ORM;

/**
 * @ORM\Entity(repositoryClass="App\Repository\PostalCode\PostalCodeRepository")
 */
class PostalCode implements PostalCodeInterface
{
    /**
     * @ORM\Id
     * @ORM\GeneratedValue
     * @ORM\Column(type="integer")
     */
    private $id;

    /**
     * @ORM\Column(type="string", length=10)
     */
    private $code;

    /**
     * @ORM\OneToMany(targetEntity="App\Entity\Branch\Branch", mappedBy="postalCode")
     */
    private $branches;

    /**
     * @ORM\OneToMany(targetEntity="App\Entity\Customer\Customer", mappedBy="postalCode")
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
    public function getCode(): string
    {
        return $this->code;
    }

    /**
     * @param mixed $code
     */
    public function setCode(string $code): void
    {
        $this->code = $code;
    }


}