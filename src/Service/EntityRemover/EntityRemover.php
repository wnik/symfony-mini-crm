<?php

namespace App\Service\EntityRemover;

use Doctrine\Common\Persistence\ManagerRegistry;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Security\Csrf\CsrfToken;
use Symfony\Component\Security\Csrf\CsrfTokenManagerInterface;

class EntityRemover implements EntityRemoverInterface
{
    private $managerRegistry;
    private $tokenManager;

    public function __construct(ManagerRegistry $managerRegistry, CsrfTokenManagerInterface $tokenManager)
    {
        $this->managerRegistry = $managerRegistry;
        $this->tokenManager = $tokenManager;
    }

    public function remove(string $entityClass, array $ids, CsrfToken $token): bool
    {
        if (!class_exists($entityClass) || !$ids || !$token || !$this->tokenManager->isTokenValid($token)) {
            return false;
        }

        $entityManager = $this->managerRegistry->getManager();
        $repository = $this->managerRegistry->getRepository($entityClass);
        $connection = $this->managerRegistry->getConnection();

        $connection->setAutoCommit(false);
        $connection->beginTransaction();

        $isNotFound = false;

        try {
            foreach ($ids as $id) {
                $entity = $repository->find($id);

                if (!$entity) {
                    $connection->rollback();
                    $connection->close();

                    $isNotFound = true;

                    break;
                }

                $entityManager->remove($entity);
                $entityManager->flush();
            }

            if ($isNotFound) {
                return false;
            }

            $connection->commit();
            $connection->close();

            return true;
        } catch (\Exception $e) {
            return false;
        }

    }
}