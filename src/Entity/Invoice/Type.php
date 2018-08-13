<?php

namespace App\Entity\Invoice;

use Doctrine\ORM\Mapping as ORM;

/**
 * @ORM\Entity(repositoryClass="App\Repository\Invoice\TypeRepository")
 * @ORM\Table(name="invoice_type")
 */
class Type implements TypeInterface
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
     * @ORM\Column(type="boolean")
     */
    private $isDefault = false;

    /**
     * @ORM\OneToMany(targetEntity="App\Entity\Invoice\Invoice", mappedBy="type")
     */
    private $invoices;

    public function getName(): string
    {
        return $this->name;
    }

    /**
     * @return mixed
     */
    public function getId(): int
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
    public function getIsDefault(): bool
    {
        return $this->isDefault;
    }

    /**
     * @param mixed $isDefault
     */
    public function setIsDefault($isDefault): void
    {
        $this->isDefault = $isDefault;
    }



}