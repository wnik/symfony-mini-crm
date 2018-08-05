<?php

namespace App\Entity\Invoice;

use Doctrine\ORM\Mapping as ORM;

/**
 * @ORM\Entity(repositoryClass="App\Repository\Invoice\ItemRepository")
 * @ORM\Table(name="invoice_item")
 */
class Item
{
    /**
     * @ORM\Id
     * @ORM\GeneratedValue
     * @ORM\Column(type="integer")
     */
    private $id;

    /**
     * @ORM\Column(type="smallint")
     */
    private $price;

    /**
     * @ORM\Column(type="float")
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

}