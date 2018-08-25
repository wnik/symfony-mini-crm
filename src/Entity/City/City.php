<?php

namespace App\Entity\City;

use Doctrine\ORM\Mapping as ORM;

/**
 * @ORM\Entity(repositoryClass="App\Repository\City\CityRepository")
 */
class City implements CityInterface
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
    private $name;

    /**
     * @ORM\OneToMany(targetEntity="App\Entity\Branch\Branch", mappedBy="city")
     */
    private $branches;

    /**
     * @ORM\OneToMany(targetEntity="App\Entity\Employee\Employee", mappedBy="city")
     */
    private $employees;

    /**
     * @ORM\OneToMany(targetEntity="App\Entity\Customer\Customer", mappedBy="city")
     */
    private $customers;

    /**
     * @return string
     */
    public function getName(): string
    {
        return $this->name;
    }

    public function setName(string $name): void
    {
        $this->name = $name;
    }

    /**
     * @return mixed
     */
    public function getId()
    {
        return $this->id;
    }


}
