<?php

namespace App\Repository\Menu;

use App\Entity\Menu\Submenu;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Symfony\Bridge\Doctrine\RegistryInterface;

/**
 * @method Submenu|null find($id, $lockMode = null, $lockVersion = null)
 * @method Submenu|null findOneBy(array $criteria, array $orderBy = null)
 * @method Submenu[]    findAll()
 * @method Submenu[]    findBy(array $criteria, array $orderBy = null, $limit = null, $offset = null)
 */
class SubmenuRepository extends ServiceEntityRepository
{
    public function __construct(RegistryInterface $registry)
    {
        parent::__construct($registry, Submenu::class);
    }

}
