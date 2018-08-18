<?php

namespace App\Service\UnitsOfInformation;

class UnitsOfInformation implements UnitsOfInformationInterface
{
    const BASE = 1024;

    const UNITS = array(
        'B',
        'KB',
        'MB',
        'GB',
        'TB',
    );

    private $units = array();

    public function __construct(string $fromUnit, string $toUnit)
    {
        $this->units = array(
          $fromUnit => false,
          $toUnit   => false,
        );

        $this->setUnitsPositions();
    }

    public function convert(int $value)
    {
        if (!$this->isUnitsExists()) {
            $unit = $this->getWrongUnit();

            return new \Exception(sprintf("Given unit is not supported: %s", $unit), 404);
        }

        if ($this->isUnitsEqual()) {
            return $value;
        }


        $conversionNumber = $this->getConversionNumber();

        if ($this->isDivision()) {
            return $value / $conversionNumber;
        }

        return $value * $conversionNumber;

    }

    public function getConversionNumber()
    {
        $positions = array_values($this->units);

        $max = $this->isDivision() ? $positions[1] - $positions[0] : $positions[0] - $positions[1];

        return $this->calculateBase($max);
    }

    public function calculateBase(int $max): int
    {
        $base = self::BASE;

        for ($i = 1; $i < $max; ++$i) {
            $base *= self::BASE;
        }

        return $base;
    }

    public function findUnit(string $unit)
    {
        return array_search($unit, self::UNITS);
    }

    public function getWrongUnit()
    {
        return array_search(false, $this->units);
    }

    public function setUnitsPositions()
    {
        $units = array_keys($this->units);

        foreach ($units as $unit) {
            $newPosition = $this->findUnit($unit);
            $this->setUnitPosition($unit, $newPosition);
        }

    }

    public function setUnitPosition(string $unit, int $position)
    {
        if (!isset($this->units[$unit])) {
            return false;
        }

        $this->units[$unit] = $position;
    }

    public function isUnitsExists(): bool
    {
        return array_search(false, $this->units) === false;
    }

    public function isDivision(): bool
    {
        $positions = array_values($this->units);

        return $positions[1] > $positions[0];
    }

    public function isUnitsEqual(): bool
    {
        $units = array_keys($this->units);

        return $units[0] === $units[1];
    }
}