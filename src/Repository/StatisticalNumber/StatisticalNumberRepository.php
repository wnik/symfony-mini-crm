<?php

namespace App\Repository\StatisticalNumber;

use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Symfony\Bridge\Doctrine\RegistryInterface;
use App\Entity\StatisticalNumber\StatisticalNumber;

/**
 * @method StatisticalNumber|null find($id, $lockMode = null, $lockVersion = null)
 * @method StatisticalNumber|null findOneBy(array $criteria, array $orderBy = null)
 * @method StatisticalNumber[]    findAll()
 * @method StatisticalNumber[]    findBy(array $criteria, array $orderBy = null, $limit = null, $offset = null)
 */
class StatisticalNumberRepository extends ServiceEntityRepository
{
    public function __construct(RegistryInterface $registry)
    {
        parent::__construct($registry, StatisticalNumber::class);
    }

}