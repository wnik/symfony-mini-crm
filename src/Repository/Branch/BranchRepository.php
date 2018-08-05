<?php

namespace App\Repository\Branch;

use App\Entity\Branch\Branch;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Pagerfanta\Adapter\DoctrineORMAdapter;
use Pagerfanta\Pagerfanta;
use Symfony\Bridge\Doctrine\RegistryInterface;

/**
 * @method Branch|null find($id, $lockMode = null, $lockVersion = null)
 * @method Branch|null findOneBy(array $criteria, array $orderBy = null)
 * @method Branch[]    findAll()
 * @method Branch[]    findBy(array $criteria, array $orderBy = null, $limit = null, $offset = null)
 */
class BranchRepository extends ServiceEntityRepository
{
    public function __construct(RegistryInterface $registry)
    {
        parent::__construct($registry, Branch::class);
    }

    public function findAllWithPagination(int $currentPage = 1, string $search = null)
    {
        $qb = $this->getEntityManager()->createQueryBuilder();

        $query = $qb->select('b')
                ->from($this->getEntityName(), 'b');
//                ->leftJoin('b.employees', 'e')
//                ->leftJoin('e.jobTitle', 'j', 'WITH', 'j.isHead = true');

//        dump($query);

        if ($search) {
            $query->where(
                    $qb->expr()->like('b.name', ':name')
                 )
                ->setParameter('name', '%' . addcslashes($search, '%_') . '%');
        }

        $adapter = new DoctrineORMAdapter($query);
        $pager = new Pagerfanta($adapter);

        $pager->setMaxPerPage(5);
        $pager->setCurrentPage($currentPage);

        return $pager;
    }
}
