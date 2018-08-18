<?php

namespace App\Entity;

use Doctrine\Common\Collections\ArrayCollection;
use Doctrine\ORM\Mapping as ORM;

/**
 * @ORM\Entity(repositoryClass="App\Repository\JobTitleRepository")
 */
class JobTitle
{
    /**
     * @ORM\Id
     * @ORM\GeneratedValue
     * @ORM\Column(type="integer")
     */
    private $id;

    /**
     * @ORM\Column(type="string", length=30)
     */
    private $name;

    /**
     * @ORM\Column(type="boolean")
     */
    private $isHead = false;

    /**
     * @ORM\OneToMany(targetEntity="App\Entity\Employee\Employee", mappedBy="jobTitle")
     */
    private $employees;

    public function __construct()
    {
        $this->employees = new ArrayCollection();
    }

    /**
     * @return ArrayCollection/Employees[]
     */
    public function getEmployees()
    {
        return $this->employees;
    }

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
    public function getName()
    {
        return $this->name;
    }

    /**
     * @param mixed $name
     */
    public function setName($name): void
    {
        $this->name = $name;
    }

    /**
     * @return mixed
     */
    public function getisHead()
    {
        return $this->isHead;
    }

    /**
     * @param mixed $isHead
     */
    public function setIsHead($isHead): void
    {
        $this->isHead = $isHead;
    }


}
