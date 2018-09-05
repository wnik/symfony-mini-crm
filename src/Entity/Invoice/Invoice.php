<?php

namespace App\Entity\Invoice;

use App\Entity\Currency\CurrencyInterface;
use App\Entity\Customer\CustomerInterface;
use App\Entity\Employee\Employee;
use App\Entity\Payment\PaymentInterface;
use Doctrine\Common\Collections\ArrayCollection;
use Doctrine\Common\Collections\Collection;
use Doctrine\ORM\Mapping as ORM;
use App\Entity\Invoice\Item as Item;

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
     * @ORM\ManyToOne(targetEntity="App\Entity\Employee\Employee", inversedBy="invoiceEmployees")
     */
    private $employee;

    /**
     * @ORM\ManyToOne(targetEntity="App\Entity\Customer\Customer", inversedBy="invoiceCustomers")
     */
    private $customer;

    /**
     * @ORM\ManyToOne(targetEntity="App\Entity\Currency\Currency", inversedBy="invoices")
     */
    private $currency;

    /**
     * @ORM\OneToMany(targetEntity="App\Entity\Invoice\Item", mappedBy="invoice", cascade={"persist"}, orphanRemoval=true)
     */
    private $items;

    /**
     * @ORM\Column(type="float", nullable=true)
     */
    private $rate;

    /**
     * @ORM\Column(type="boolean")
     */
    private $status = false;

    /**
     * @ORM\OneToOne(targetEntity="App\Entity\Payment\Payment", inversedBy="invoice", cascade={"persist"})
     */
    private $payment;

    /**
     * @ORM\Column(type="float")
     */
    private $total = 0;

    /**
     * @ORM\Column(type="float")
     */
    private $cost = 0;

    public function __construct()
    {
        $this->items = new ArrayCollection();
    }

    /**
     * @return int
     */
    public function getId(): int
    {
        return $this->id;
    }

    /**
     * @param $id
     */
    public function setId($id): void
    {
        $this->id = $id;
    }

    /**
     * @return null|string
     */
    public function getReference(): ?string
    {
        return $this->reference;
    }

    /**
     * @param null|string $reference
     */
    public function setReference(?string $reference): void
    {
        $this->reference = $reference;
    }

    /**
     * @return TypeInterface|null
     */
    public function getType(): ?TypeInterface
    {
        return $this->type;
    }

    /**
     * @param TypeInterface $type
     */
    public function setType(TypeInterface $type): void
    {
        $this->type = $type;
    }

    /**
     * @return \DateTimeInterface|null
     */
    public function getIssueDate(): ?\DateTimeInterface
    {
        return $this->issueDate;
    }


    /**
     * @param \DateTimeInterface $date
     */
    public function setIssueDate(\DateTimeInterface $date): void
    {
        $this->issueDate = $date;
    }

    /**
     * @return \DateTimeInterface|null
     */
    public function getDueDate(): ?\DateTimeInterface
    {
        return $this->dueDate;
    }

    /**
     * @param \DateTimeInterface $date
     */
    public function setDueDate(\DateTimeInterface $date): void
    {
        $this->dueDate = $date;
    }

    /**
     * @return CustomerInterface|null
     */
    public function getCustomer(): ?CustomerInterface
    {
        return $this->customer;
    }

    /**
     * @param CustomerInterface $customer
     */
    public function setCustomer(CustomerInterface $customer): void
    {
        $this->customer = $customer;
    }

    /**
     * @return CurrencyInterface|null
     */
    public function getCurrency(): ?CurrencyInterface
    {
        return $this->currency;
    }

    /**
     * @param CurrencyInterface $currency
     */
    public function setCurrency(CurrencyInterface $currency): void
    {
        $this->currency = $currency;
    }

    /**
     * @return bool
     */
    public function getStatus(): bool
    {
        return $this->status;
    }

    /**
     * @param bool $status
     */
    public function setStatus(bool $status): void
    {
        $this->status = $status;
    }

    /**
     * @return PaymentInterface|null
     */
    public function getPayment(): ?PaymentInterface
    {
        return $this->payment;
    }

    /**
     * @param PaymentInterface $payment
     */
    public function setPayment(PaymentInterface $payment): void
    {
        $this->payment = $payment;
    }

    /**
     * @return float|null
     */
    public function getRate(): ?float
    {
        return $this->rate;
    }

    /**
     * @param float $rate
     */
    public function setRate(float $rate): void
    {
        $this->rate = $rate;
    }

    /**
     * @return Collection
     */
    public function getItems(): Collection
    {
        return $this->items;
    }

    /**
     * @param \App\Entity\Invoice\Item $item
     * @return InvoiceInterface
     */
    public function addItem(Item $item): InvoiceInterface
    {
        if (!$this->items->contains($item)) {
            $this->items[] = $item;

            $this->addTotals($item);
            $item->setInvoice($this);
        }

        return $this;
    }

    public function addTotals(Item $item): void
    {
        if ($this->total < 0) {
            $this->total = 0;
        }

        if ($this->cost < 0) {
            $this->cost = 0;
        }

        $this->total += $item->getPrice() * $item->getQuantity();
        $this->cost += $item->getCost() * $item->getQuantity();
    }

    public function removeTotals(Item $item): void
    {
        $this->total -= $item->getPrice() * $item->getQuantity();
        $this->cost -= $item->getCost() * $item->getQuantity();
    }

    /**
     * @param \App\Entity\Invoice\Item $item
     * @return InvoiceInterface
     */
    public function removeItem(Item $item): InvoiceInterface
   {
        if ($this->items->contains($item)) {
            $this->items->removeElement($item);

            $this->removeTotals($item);

            if ($item->getInvoice() === $this) {
                $item->setInvoice(null);
            }
        }

        return $this;
    }

    /**
     * @return Employee|null
     */
    public function getEmployee(): ?Employee
    {
        return $this->employee;
    }

    /**
     * @param Employee $employee
     */
    public function setEmployee(Employee $employee): void
    {
        $this->employee = $employee;
    }

    /**
     * @return float
     */
    public function getTotal(): float
    {
        return $this->total;
    }

    /**
     * @param float $total
     */
    public function setTotal(float $total): void
    {
        $this->total = $total;
    }

    /**
     * @return float
     */
    public function getCost(): float
    {
        return $this->cost;
    }

    /**
     * @param float $cost
     */
    public function setCost(float $cost): void
    {
        $this->cost = $cost;
    }


}