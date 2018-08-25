<?php

namespace App\Entity\Customer;

use App\Entity\City\CityInterface;
use App\Entity\Country\CountryInterface;
use App\Entity\PostalCode\PostalCodeInterface;
use App\Entity\StatisticalNumber\StatisticalNumberInterface;
use App\Entity\TaxId\TaxIdInterface;

interface CustomerInterface
{
    public function getFirstName(): ?string;
    public function setFirstName(?string $firstName): void;
    public function getLastName(): ?string;
    public function setLastName(?string $lastName): void;
    public function getFullName(): string;
    public function getPhone(): ?string;
    public function setPhone(?string $phone): void;
    public function getEmail(): ?string;
    public function setEmail(?string $email): void;
    public function getAddress1(): ?string;
    public function setAddress1(?string $address): void;
    public function getAddress2(): ?string;
    public function setAddress2(?string $address): void;
    public function getPostalCode(): PostalCodeInterface;
    public function setPostalCode(PostalCodeInterface $postalCode): void;
    public function getTaxId(): TaxIdInterface;
    public function setTaxId(TaxIdInterface $taxId): void;
    public function getStatisticalNumber(): StatisticalNumberInterface;
    public function setStatisticalNumber(StatisticalNumberInterface $statisticalNumber): void;
    public function getCity(): CityInterface;
    public function setCity(CityInterface $city): void;
    public function getCountry(): CountryInterface;
    public function setCountry(CountryInterface $country): void;
}