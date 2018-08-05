<?php

namespace App\Entity\Payment;

use App\Entity\PaymentType\PaymentTypeInterface;
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
     * @ORM\ManyToOne(targetEntity="App\Entity\PaymentType\PaymentType", inversedBy="payments")
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

}