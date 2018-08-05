<?php

namespace App\Repository\Document;

use App\Entity\Document\Document;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Symfony\Bridge\Doctrine\RegistryInterface;
use Pagerfanta\Adapter\DoctrineORMAdapter;
use Pagerfanta\Pagerfanta;

/**
 * @method Document|null find($id, $lockMode = null, $lockVersion = null)
 * @method Document|null findOneBy(array $criteria, array $orderBy = null)
 * @method Document[]    findAll()
 * @method Document[]    findBy(array $criteria, array $orderBy = null, $limit = null, $offset = null)
 */
class DocumentRepository extends ServiceEntityRepository
{
    public function __construct(RegistryInterface $registry)
    {
        parent::__construct($registry, Document::class);
    }

    public function findAllWithPagination(int $currentPage = 1, string $search = null)
    {
        $qb = $this->getEntityManager()->createQueryBuilder();

        $query = $qb->select('d')
            ->from($this->getEntityName(), 'd');

//        if ($search) {
//
//
//            $query->where(
//                $qb->expr()->like('e.firstName', ':firstName')
//            )
//                ->setParameter('firstName', '%' . addcslashes($search, '%_') . '%');
//            $query->orWhere(
//                $qb->expr()->like('e.lastName', ':lastName')
//            )
//                ->setParameter('lastName', '%' . addcslashes($search, '%_') . '%');
//            $query->orWhere(
//                $qb->expr()->like('j.name', ':jobTitle')
//            )
//                ->setParameter('jobTitle', '%' . addcslashes($search, '%_') . '%');
//            $query->orWhere(
//                $qb->expr()->like('e.startDate', ':startDate')
//            )
//                ->setParameter('startDate', '%' . addcslashes($date, '%_') . '%');
//            $query->orWhere(
//                $qb->expr()->like('e.endDate', ':endDate')
//            )
//                ->setParameter('endDate', '%' . addcslashes($date, '%_') . '%');
//        }

        $adapter = new DoctrineORMAdapter($query);
        $pager = new Pagerfanta($adapter);

        $pager->setMaxPerPage(10);
        $pager->setCurrentPage($currentPage);

        return $pager;
    }
}
