<?php

namespace App\Entity\Currency;

use Doctrine\Common\Collections\ArrayCollection;
use Doctrine\ORM\Mapping as ORM;
use App\Entity\Currency\CurrencyInterface;

/**
 * @ORM\Entity(repositoryClass="App\Repository\CurrencyRepository")
 */
Class Currency implements CurrencyInterface
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
     * @ORM\Column(type="string", length=3)
     */
    private $iso;

    /**
     * @ORM\Column(type="boolean")
     */
    private $isDefault = false;

    /**
     * @ORM\OneToMany(targetEntity="App\Entity\Invoice\Invoice", mappedBy="currency")
     */
    private $invoices;

    public function __construct()
    {
        $this->invoices = new ArrayCollection();
    }

    public function getName(): string
    {
        return $this->name;
    }

    public function getISO(): string
    {
        return $this->iso;
    }

    public function setName(string $name): void
    {
        $this->name = $name;
    }

    public function setISO(string $iso): void
    {
        $this->iso = $iso;
    }

    public function getFullName(): string
    {
        return "{$this->name} ({$this->iso})";
    }

    public function getIsDefault(): bool
    {
        return $this->isDefault;
    }

    public function setIsDefault(bool $isDefault): void
    {
        $this->isDefault = $isDefault;
    }
}