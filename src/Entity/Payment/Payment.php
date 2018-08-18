<?php

namespace App\Entity\Payment;

use App\Entity\Invoice\InvoiceInterface;
use App\Entity\Payment\PaymentTypeInterface;
use Doctrine\ORM\Mapping as ORM;
use App\Entity\Payment\PaymentInterface;

/**
 * @ORM\Entity(repositoryClass="App\Repository\Payment\PaymentRepository")
 */
Class Payment implements PaymentInterface
{
    /**
     * @ORM\id
     * @ORM\GeneratedValue
     * @ORM\Column(type="integer")
     */
    private $id;

    /**
     * @ORM\ManyToOne(targetEntity="App\Entity\Payment\PaymentType", inversedBy="payments")
     */
    private $type;

    /**
     * @ORM\OneToOne(targetEntity="App\Entity\Invoice\Invoice", mappedBy="payment")
     */
    private $invoice;

    /**
     * @ORM\Column(type="datetime", nullable=true)
     */
    private $updatedAt = null;

    /**
     * @ORM\Column(type="boolean")
     */
    private $status = false;

    public function getId(): int
    {
        return $this->id;
    }

    public function setId(int $id): void
    {
        $this->id = $id;
    }

    public function getStatus(): bool
    {
        return $this->status;
    }

    public function getType(): PaymentTypeInterface
    {
        return $this->type;
    }

    public function getUpdatedAt(): ?\DateTimeInterface
    {
        return $this->updatedAt;
    }

    public function setType(PaymentTypeInterface $type): void
    {
        $this->type = $type;
    }

    public function setUpdatedAt(\DateTime $dateTime): void
    {
        $this->updatedAt = $dateTime;
    }

    public function setStatus(bool $status): void
    {
        $this->status = $status;
    }

    public function getInvoice(): InvoiceInterface
    {
        return $this->invoice;
    }

    public function setInvoice(InvoiceInterface $invoice): void
    {
        $this->invoice = $invoice;
    }


}