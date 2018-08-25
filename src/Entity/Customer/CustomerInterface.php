<?php

namespace App\Entity\Customer;

interface CustomerInterface
{
    public function getFirstName(): ?string;
    public function getLastName(): ?string;
    public function getPhone(): ?string;
    public function getEmail(): ?string;
    public function getAddress1(): ?string;
    public function getAddress2(): ?string;
    public function setFirstName(?string $firstName): void;
    public function setLastName(?string $lastName): void;
    public function setPhone(?string $phone): void;
    public function setEmail(?string $email): void;
    public function setAddress1(?string $address): void;
    public function setAddress2(?string $address): void;
}