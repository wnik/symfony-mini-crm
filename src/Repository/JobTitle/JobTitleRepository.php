<?php

namespace App\Repository\JobTitle;

use App\Entity\JobTitle\JobTitle;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Symfony\Bridge\Doctrine\RegistryInterface;

/**
 * @method JobTitle|null find($id, $lockMode = null, $lockVersion = null)
 * @method JobTitle|null findOneBy(array $criteria, array $orderBy = null)
 * @method JobTitle[]    findAll()
 * @method JobTitle[]    findBy(array $criteria, array $orderBy = null, $limit = null, $offset = null)
 */
class JobTitleRepository extends ServiceEntityRepository
{
    public function __construct(RegistryInterface $registry)
    {
        parent::__construct($registry, JobTitle::class);
    }

}
