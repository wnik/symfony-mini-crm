<?php

namespace App\Entity\Customer;

use Doctrine\Common\Collections\ArrayCollection;
use Doctrine\ORM\Mapping as ORM;
use App\Entity\Customer\CustomerInterface;

/**
 * @ORM\Entity(repositoryClass="App\Repository\Customer\CustomerRepository")
 */
class Customer implements CustomerInterface
{
    /**
     * @ORM\Id
     * @ORM\GeneratedValue
     * @ORM\Column(type="integer")
     */
    private $id;

    /**
     * @ORM\Column(type="string", length=25)
     */
    private $firstName;

    /**
     * @ORM\Column(type="string", length=25)
     */
    private $lastName;

    /**
     * @ORM\Column(type="string", length=12)
     */
    private $phone;

    /**
     * @ORM\Column(type="string", length=60, unique=true)
     */
    private $email;

    /**
     * @ORM\Column(type="string")
     */
    private $address1;

    /**
     * @ORM\Column(type="string")
     */
    private $address2;

    /**
     * @ORM\ManyToOne(targetEntity="App\Entity\City\City", inversedBy="customers")
     */
    private $city;

    /**
     * @ORM\ManyToOne(targetEntity="App\Entity\Country\Country", inversedBy="customers")
     */
    private $country;

    /**
     * @ORM\ManyToOne(targetEntity="App\Entity\PostalCode\PostalCode", inversedBy="customers", cascade={"persist"})
     */
    private $postalCode;

    /**
     * @ORM\ManyToOne(targetEntity="App\Entity\TaxId\TaxId", inversedBy="customers", cascade={"persist"})
     */
    private $taxId;

    /**
     * @ORM\ManyToOne(targetEntity="App\Entity\StatisticalNumber\StatisticalNumber", inversedBy="customers", cascade={"persist"})
     */
    private $statisticalNumber;

    /**
     * @ORM\OneToMany(targetEntity="App\Entity\Invoice\Invoice", mappedBy="customer")
     */
    private $invoiceCustomers;

    public function __construct()
    {
        $this->invoiceCustomers = new ArrayCollection();
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
    public function getFirstName(): ?string
    {
        return $this->firstName;
    }

    /**
     * @param mixed $firstName
     */
    public function setFirstName(?string $firstName): void
    {
        $this->firstName = $firstName;
    }

    /**
     * @return mixed
     */
    public function getLastName(): ?string
    {
        return $this->lastName;
    }

    /**
     * @param mixed $lastName
     */
    public function setLastName(?string $lastName): void
    {
        $this->lastName = $lastName;
    }

    /**
     * @return mixed
     */
    public function getPhone(): ?string
    {
        return $this->phone;
    }

    /**
     * @param mixed $phone
     */
    public function setPhone(?string $phone): void
    {
        $this->phone = $phone;
    }

    /**
     * @return mixed
     */
    public function getEmail(): ?string
    {
        return $this->email;
    }

    /**
     * @param mixed $email
     */
    public function setEmail(?string $email): void
    {
        $this->email = $email;
    }

    /**
     * @return mixed
     */
    public function getAddress1(): ?string
    {
        return $this->address1;
    }

    /**
     * @param mixed $address
     */
    public function setAddress1(?string $address): void
    {
        $this->address1 = $address;
    }

    /**
     * @return mixed
     */
    public function getAddress2(): ?string
    {
        return $this->address2;
    }

    /**
     * @param mixed $address
     */
    public function setAddress2(?string $address): void
    {
        $this->address2 = $address;
    }

    public function getFullName(): string
    {
        return "{$this->firstName} {$this->lastName}";
    }

    /**
     * @return mixed
     */
    public function getCity()
    {
        return $this->city;
    }

    /**
     * @param mixed $city
     */
    public function setCity($city): void
    {
        $this->city = $city;
    }

    /**
     * @return mixed
     */
    public function getCountry()
    {
        return $this->country;
    }

    /**
     * @param mixed $country
     */
    public function setCountry($country): void
    {
        $this->country = $country;
    }

    /**
     * @return mixed
     */
    public function getPostalCode()
    {
        return $this->postalCode;
    }

    /**
     * @param mixed $postalCode
     */
    public function setPostalCode($postalCode): void
    {
        $this->postalCode = $postalCode;
    }

    /**
     * @return mixed
     */
    public function getTaxId()
    {
        return $this->taxId;
    }

    /**
     * @param mixed $taxId
     */
    public function setTaxId($taxId): void
    {
        $this->taxId = $taxId;
    }

    /**
     * @return mixed
     */
    public function getStatisticalNumber()
    {
        return $this->statisticalNumber;
    }

    /**
     * @param mixed $statisticalNumber
     */
    public function setStatisticalNumber($statisticalNumber): void
    {
        $this->statisticalNumber = $statisticalNumber;
    }


}
