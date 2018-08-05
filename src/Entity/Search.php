<?php

namespace App\Entity;

class Search
{
    protected $query;

    public function __construct()
    {
        $this->query = '';
    }

    /**
     * @return string
     */
    public function getQuery(): string
    {
        return $this->query;
    }

    /**
     * @param string $query
     */
    public function setQuery(string $query)
    {
        $this->query = $query;
    }

}