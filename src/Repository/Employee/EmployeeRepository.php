<?php

namespace App\Repository\Employee;

use App\Entity\Employee\Employee;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Symfony\Bridge\Doctrine\RegistryInterface;
use Pagerfanta\Adapter\DoctrineORMAdapter;
use Pagerfanta\Pagerfanta;
use Symfony\Component\Serializer\Normalizer\DateTimeNormalizer;
use Symfony\Component\Serializer\Serializer;

/**
 * @method Employee|null find($id, $lockMode = null, $lockVersion = null)
 * @method Employee|null findOneBy(array $criteria, array $orderBy = null)
 * @method Employee[]    findAll()
 * @method Employee[]    findBy(array $criteria, array $orderBy = null, $limit = null, $offset = null)
 */
class EmployeeRepository extends ServiceEntityRepository
{
    public function __construct(RegistryInterface $registry)
    {
        parent::__construct($registry, Employee::class);
    }

    public function findAllWithPagination(int $currentPage = 1, string $search = null)
    {
        $qb = $this->getEntityManager()->createQueryBuilder();

        $query = $qb->select('e')
                    ->from($this->getEntityName(), 'e')
                    ->join('e.jobTitle', 'j');

        if ($search) {

            $serializer = new Serializer(array(new DateTimeNormalizer('Y-m-d')));

            $date = $serializer->normalize(new \DateTime($search));

            $query->where(
                $qb->expr()->like('e.firstName', ':firstName')
            )
                ->setParameter('firstName', '%' . addcslashes($search, '%_') . '%');
            $query->orWhere(
                $qb->expr()->like('e.lastName', ':lastName')
            )
                ->setParameter('lastName', '%' . addcslashes($search, '%_') . '%');
            $query->orWhere(
                $qb->expr()->like('j.name', ':jobTitle')
            )
                ->setParameter('jobTitle', '%' . addcslashes($search, '%_') . '%');
            $query->orWhere(
                $qb->expr()->like('e.startDate', ':startDate')
            )
                ->setParameter('startDate', '%' . addcslashes($date, '%_') . '%');
            $query->orWhere(
                $qb->expr()->like('e.endDate', ':endDate')
            )
                ->setParameter('endDate', '%' . addcslashes($date, '%_') . '%');
        }

        $adapter = new DoctrineORMAdapter($query);
        $pager = new Pagerfanta($adapter);

        $pager->setMaxPerPage(10);
        $pager->setCurrentPage($currentPage);

        return $pager;
    }
}
