<?php

namespace App\EventListener;

use Doctrine\ORM\EntityManagerInterface;
use Symfony\Component\HttpFoundation\Session\Flash\FlashBagInterface;
use Symfony\Component\Security\Http\Event\InteractiveLoginEvent;

class LoginListener
{
    private $entityManager;
    private $flashBag;

    public function __construct(EntityManagerInterface $entityManager, FlashBagInterface $flashBag)
    {
        $this->entityManager = $entityManager;
        $this->flashBag = $flashBag;
    }

    public function onSecurityInteractiveLogin(InteractiveLoginEvent $event)
    {
        $employee = $event->getAuthenticationToken()->getUser()->getEmployee();

        if (!$employee) {
            return;
        }

        $lastLoginDate = $employee->getLastLoginDate();

        $lastLoginMessage = $lastLoginDate ? "Your last login was on {$lastLoginDate->format('d.m.Y H:i')}." : 'It\'s your first login.';

        $this->flashBag->add('success', "You have succesfully logged in. $lastLoginMessage");

        $employee->setLastLoginDate(new \DateTime());

        $this->entityManager->persist($employee);
        $this->entityManager->flush();
    }
}