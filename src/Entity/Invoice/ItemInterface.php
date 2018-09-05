<?php

namespace App\Entity\Invoice;

interface ItemInterface
{
    public function setPrice(float $price): void;
    public function getPrice(): ?float;
    public function setNet(float $net): void;
    public function getNet(): ?float;
    public function setCost(float $cost): void;
    public function getCost(): ?float;
    public function setQuantity(int $quantity): void;
    public function getQuantity(): ?int;
}