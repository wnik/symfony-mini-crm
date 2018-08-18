<?php

namespace App\Entity\Branch;

use App\Entity\Employee\Employee;
use Doctrine\Common\Collections\ArrayCollection;
use Doctrine\ORM\Mapping as ORM;
use Symfony\Component\Validator\Constraints as Assert;

/**
 * @ORM\Entity(repositoryClass="App\Repository\Branch\BranchRepository")
 */
class Branch
{
    /**
     * @ORM\Id
     * @ORM\GeneratedValue
     * @ORM\Column(type="integer")
     */
    private $id;

    /**
     * @ORM\Column(type="string", length=20)
     */
    private $name;

    /**
     * @ORM\Column(name="is_active", type="boolean")
     */
    private $isActive = false;

    /**
     * @ORM\Column(type="string", nullable=false)
     * @Assert\File(mimeTypes={ "image/png", "image/jpeg"})
     */
    private $picture = '';

    /**
     * @ORM\Column(name="postal_code", type="string", length=13)
     */
    private $postalCode;

    /**
     * @ORM\Column(type="string")
     */
    private $address1;

    /**
     * @ORM\Column(type="string")
     */
    private $address2;

    /** NIP
     * @ORM\Column(name="tax_id", type="string")
     */
    private $taxId;

    /** REGON
     * @ORM\Column(name="statistical_number", type="string")
     */
    private $statisticalNumber;

    /**
     * @ORM\ManyToOne(targetEntity="App\Entity\City\City", inversedBy="branches")
     */
    private $city;

    /**
     * @ORM\ManyToOne(targetEntity="App\Entity\Country\Country", inversedBy="branches")
     */
    private $country;


    /**
     * @ORM\Column(name="create_date", type="date")
     */
    private $createDate;

    /**
     * @ORM\Column(name="end_date", type="date")
     */
    private $endDate;

    /**
     * @ORM\OneToMany(targetEntity="App\Entity\Employee\Employee", mappedBy="branch")
     */
    private $employees;

    public function __construct()
    {
        $this->employees = new ArrayCollection();
    }

    /**
     * @return mixed
     */
    public function getId()
    {
        return $this->id;
    }


    /**
     * @return ArrayCollection/Employees[]
     */
    public function getEmployees()
    {
        return $this->employees->filter(function (Employee $employee) {
            return $employee->getJobTitle()->getIsHead() == true;
        });
    }

    /**
     * @return string
     */
    public function getName()
    {
        return $this->name;
    }

    /**
     * @return mixed
     */
    public function getisActive()
    {
        return $this->isActive;
    }

    /**
     * @return mixed
     */
    public function getPicture()
    {
        return $this->picture;
    }

    /**
     * @return mixed
     */
    public function getPostalCode()
    {
        return $this->postalCode;
    }

    /**
     * @return mixed
     */
    public function getAddress1()
    {
        return $this->address1;
    }

    /**
     * @return mixed
     */
    public function getAddress2()
    {
        return $this->address2;
    }

    /**
     * @return mixed
     */
    public function getTaxId()
    {
        return $this->taxId;
    }

    /**
     * @return mixed
     */
    public function getStatisticalNumber()
    {
        return $this->statisticalNumber;
    }

    /**
     * @return mixed
     */
    public function getCity()
    {
        return $this->city;
    }

    /**
     * @return mixed
     */
    public function getCountry()
    {
        return $this->country;
    }

    /**
     * @return mixed
     */
    public function getCreateDate()
    {
        return $this->createDate;
    }

    /**
     * @return mixed
     */
    public function getEndDate()
    {
        return $this->endDate;
    }

    /**
     * @param mixed $name
     */
    public function setName($name): void
    {
        $this->name = $name;
    }

    /**
     * @param mixed $isActive
     */
    public function setIsActive($isActive): void
    {
        $this->isActive = $isActive;
    }

    /**
     * @param mixed $picture
     */
    public function setPicture($picture): void
    {
        $this->picture = $picture === null ? '' : $picture;
    }

    /**
     * @param mixed $postalCode
     */
    public function setPostalCode($postalCode): void
    {
        $this->postalCode = $postalCode;
    }

    /**
     * @param mixed $address1
     */
    public function setAddress1($address1): void
    {
        $this->address1 = $address1;
    }

    /**
     * @param mixed $address2
     */
    public function setAddress2($address2): void
    {
        $this->address2 = $address2;
    }

    /**
     * @param mixed $statisticalNumber
     */
    public function setStatisticalNumber($statisticalNumber): void
    {
        $this->statisticalNumber = $statisticalNumber;
    }

    /**
     * @param mixed $createDate
     */
    public function setCreateDate($createDate): void
    {
        $this->createDate = $createDate;
    }

    /**
     * @param mixed $endDate
     */
    public function setEndDate($endDate): void
    {
        $this->endDate = $endDate;
    }

    /**
     * @param mixed $taxId
     */
    public function setTaxId($taxId): void
    {
        $this->taxId = $taxId;
    }

    /**
     * @param mixed $city
     */
    public function setCity($city): void
    {
        $this->city = $city;
    }

    /**
     * @param mixed $country
     */
    public function setCountry($country): void
    {
        $this->country = $country;
    }

}
