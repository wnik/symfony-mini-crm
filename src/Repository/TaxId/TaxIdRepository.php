<?php

namespace App\Repository\TaxId;

use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Symfony\Bridge\Doctrine\RegistryInterface;
use App\Entity\TaxId\TaxId;

/**
 * @method TaxId|null find($id, $lockMode = null, $lockVersion = null)
 * @method TaxId|null findOneBy(array $criteria, array $orderBy = null)
 * @method TaxId[]    findAll()
 * @method TaxId[]    findBy(array $criteria, array $orderBy = null, $limit = null, $offset = null)
 */
class TaxIdRepository extends ServiceEntityRepository
{
    public function __construct(RegistryInterface $registry)
    {
        parent::__construct($registry, TaxId::class);
    }

}