<?php

namespace App\Entity\Invoice;

use App\Entity\Currency\CurrencyInterface;
use App\Entity\Customer\CustomerInterface;
use App\Entity\Payment\PaymentInterface;
use Doctrine\ORM\Mapping as ORM;

/**
 * @ORM\Entity(repositoryClass="App\Repository\Invoice\InvoiceRepository")
 */
class Invoice implements InvoiceInterface
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
    private $reference;

    /**
     * @ORM\ManyToOne(targetEntity="App\Entity\Invoice\Type", inversedBy="invoices")
     */
    private $type;

    /**
     * @ORM\Column(type="datetime")
     */
    private $issueDate;

    /**
     * @ORM\Column(type="datetime")
     */
    private $dueDate;

    /**
     * @ORM\ManyToOne(targetEntity="App\Entity\Customer\Customer", inversedBy="invoiceCustomers")
     */
    private $customer;

    /**
     * @ORM\ManyToOne(targetEntity="App\Entity\Currency\Currency", inversedBy="invoices")
     */
    private $currency;

    /**
     * @ORM\OneToMany(targetEntity="App\Entity\Invoice\Item", mappedBy="invoice")
     */
    private $items;

    /**
     * @ORM\Column(type="float")
     */
    private $rate;

    /**
     * @ORM\Column(type="boolean")
     */
    private $status;

    /**
     * @ORM\OneToOne(targetEntity="App\Entity\Payment\Payment", inversedBy="invoice")
     */
    private $payment;

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
    public function getReference(): ?string
    {
        return $this->reference;
    }

    /**
     * @param mixed $reference
     */
    public function setReference(?string $reference): void
    {
        $this->reference = $reference;
    }

    public function getType(): ?TypeInterface
    {
        return $this->type;
    }

    public function setType(TypeInterface $type): void
    {
        $this->type = $type;
    }

    /**
     * @return mixed
     */
    public function getIssueDate(): ?\DateTimeInterface
    {
        return $this->issueDate;
    }

    /**
     * @param mixed $issueDate
     */
    public function setIssueDate(\DateTimeInterface $date): void
    {
        $this->issueDate = $date;
    }

    /**
     * @return mixed
     */
    public function getDueDate(): ?\DateTimeInterface
    {
        return $this->dueDate;
    }

    /**
     * @param mixed $dueDate
     */
    public function setDueDate(\DateTimeInterface $date): void
    {
        $this->dueDate = $date;
    }

    /**
     * @return mixed
     */
    public function getCustomer(): ?CustomerInterface
    {
        return $this->customer;
    }

    /**
     * @param mixed $customer
     */
    public function setCustomer(CustomerInterface $customer): void
    {
        $this->customer = $customer;
    }

    /**
     * @return mixed
     */
    public function getCurrency(): ?CurrencyInterface
    {
        return $this->currency;
    }

    /**
     * @param mixed $currency
     */
    public function setCurrency(CurrencyInterface $currency): void
    {
        $this->currency = $currency;
    }

    /**
     * @return mixed
     */
    public function getStatus(): bool
    {
        return $this->status;
    }

    /**
     * @param mixed $status
     */
    public function setStatus(bool $status): void
    {
        $this->status = $status;
    }

    /**
     * @return mixed
     */
    public function getPayment(): ?PaymentInterface
    {
        return $this->payment;
    }

    /**
     * @param mixed $payment
     */
    public function setPayment(PaymentInterface $payment): void
    {
        $this->payment = $payment;
    }

    /**
     * @return mixed
     */
    public function getRate(): ?float
    {
        return $this->rate;
    }

    /**
     * @param mixed $rate
     */
    public function setRate(float $rate): void
    {
        $this->rate = $rate;
    }


}