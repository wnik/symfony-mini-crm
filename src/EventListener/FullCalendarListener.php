<?php

namespace App\EventListener;

use Toiba\FullCalendarBundle\Entity\Event;
use Toiba\FullCalendarBundle\Event\CalendarEvent;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Component\Routing\Generator\UrlGeneratorInterface;


class FullCalendarListener
{
    /**
     * @var EntityManagerInterface
     */
    private $em;

    /**
     * @var UrlGeneratorInterface
     */
    private $router;

    public function __construct(EntityManagerInterface $em, UrlGeneratorInterface $router)
    {
        $this->em = $em;
        $this->router = $router;
    }

    public function loadEvents(CalendarEvent $calendar)
    {
        $startDate = $calendar->getStart();
        $endDate = $calendar->getEnd();
        $filters = $calendar->getFilters();

        $events = $this->em->getRepository(\App\Entity\Event\Event::class)
            ->createQueryBuilder('e')
            ->andWhere('e.beginAt BETWEEN :startDate and :endDate')
            ->setParameter('startDate', $startDate->format('Y-m-d H:i:s'))
            ->setParameter('endDate', $endDate->format('Y-m-d H:i:s'))
            ->getQuery()
            ->getResult();

        foreach ($events as $event) {
            $meeting = new Event(
                $event->getTitle(),
                $event->getBeginAt(),
                $event->getEndAt()
            );

            $meeting->setUrl(
              $this->router->generate('meetings_edit', array(
                 'id' => $event->getId(),
              ))
            );

            $calendar->addEvent($meeting);
        }
    }
}