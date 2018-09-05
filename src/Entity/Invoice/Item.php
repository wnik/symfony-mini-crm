<?php

namespace App\Entity\Invoice;

use App\Entity\VatRate\VatRate;
use Doctrine\ORM\Mapping as ORM;

/**
 * @ORM\Entity(repositoryClass="App\Repository\Invoice\ItemRepository")
 * @ORM\Table(name="invoice_item")
 */
class Item implements ItemInterface
{
    /**
     * @ORM\Id
     * @ORM\GeneratedValue
     * @ORM\Column(type="integer")
     */
    private $id;

    /**
     * @ORM\Column(type="float")
     */
    private $price;

    /**
     * @ORM\Column(type="float")
     */
    private $net;

    /**
     * @ORM\Column(type="float")
     */
    private $cost;

    /**
     * @ORM\Column(type="float", nullable=true)
     */
    private $rate;

    /**
     * @ORM\ManyToOne(targetEntity="App\Entity\VatRate\VatRate", inversedBy="invoiceItems")
     */
    private $vatRate;

    /**
     * @ORM\ManyToOne(targetEntity="App\Entity\Invoice\Invoice", inversedBy="items")
     */
    private $invoice;

    /**
     * @ORM\ManyToOne(targetEntity="App\Entity\Item\Item", inversedBy="items")
     */
    private $item;

    /**
     * @ORM\Column(type="smallint")
     */
    private $quantity;

    /**
     * @return mixed
     */
    public function getId()
    {
        return $this->id;
    }

    /**
     * @param int $id
     */
    public function setId(int $id): void
    {
        $this->id = $id;
    }

    /**
     * @return float
     */
    public function getPrice(): ?float
    {
        return $this->price;
    }

    /**
     * @param mixed $price
     */
    public function setPrice(float $price): void
    {
        $this->price = $price;
    }

    /**
     * @return float
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
     * @return VatRate
     */
    public function getVatRate(): ?VatRate
    {
        return $this->vatRate;
    }

    /**
     * @param VatRate $vatRate
     */
    public function setVatRate(VatRate $vatRate): void
    {
        $this->vatRate = $vatRate;
    }

    /**
     * @return InvoiceInterface
     */
    public function getInvoice(): InvoiceInterface
    {
        return $this->invoice;
    }

    /**
     * @param InvoiceInterface $invoice
     * @return Item
     */
    public function setInvoice(?InvoiceInterface $invoice): self
    {
        $this->invoice = $invoice;

        return $this;
    }

    /**
     * @return mixed
     */
    public function getItem(): ?\App\Entity\Item\Item
    {
        return $this->item;
    }

    /**
     * @param \App\Entity\Item\Item $item
     */
    public function setItem(\App\Entity\Item\Item $item): void
    {
        $this->item = $item;
    }

    /**
     * @return integer
     */
    public function getQuantity(): ?int
    {
        return $this->quantity;
    }

    /**
     * @param int $quantity
     */
    public function setQuantity(int $quantity): void
    {
        $this->quantity = $quantity;
    }

    /**
     * @return null|float
     */
    public function getCost(): ?float
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

    /**
     * @return null|float
     */
    public function getNet(): ?float
    {
        return $this->net;
    }

    /**
     * @param float $net
     */
    public function setNet(float $net): void
    {
        $this->net = $net;
    }



}