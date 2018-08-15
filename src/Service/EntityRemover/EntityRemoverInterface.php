<?php

namespace App\Service\EntityRemover;

use Symfony\Component\Security\Csrf\CsrfToken;

interface EntityRemoverInterface
{
    public function remove(string $entityClass, array $ids, CsrfToken $token): bool;
}