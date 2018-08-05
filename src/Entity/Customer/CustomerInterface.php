<?php

namespace App\Entity\Customer;

interface CustomerInterface
{
    public function getFirstName(): ?string;
    public function getLastName(): ?string;
    public function getPhone(): ?string;
    public function getEmail(): ?string;
    public function getAddress(): ?string;
    public function setFirstName(?string $firstName): void;
    public function setLastName(?string $lastName): void;
    public function setPhone(?string $phone): void;
    public function setEmail(?string $email): void;
    public function setAddress(?string $address): void;
}