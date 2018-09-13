<?php

namespace App\Controller\Meeting;

use App\Entity\Event\Event;
use App\Form\Meeting\MeetingType;
use Symfony\Bundle\FrameworkBundle\Controller\Controller;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\HttpFoundation\Session\Session;

class MeetingController extends Controller
{

    public function index(): Response
    {
        return $this->render('Meeting/index.html.twig', array(
            'title' => 'CRM - Meetings',
        ));
    }

    public function add(Request $request): Response
    {
        $event = new Event();

        $form = $this->createForm(MeetingType::class, $event, array(
            'method' => 'POST',
        ));

        $form->handleRequest($request);

        if ($form->isSubmitted() && $form->isValid()) {
            $event = $form->getData();

            $entityManager = $this->getDoctrine()->getManager();
            $entityManager->persist($event);
            $entityManager->flush();

            $session = new Session();

            $session->getFlashBag()->add('success', 'Meeting has been added.');


            return $this->redirect($this->generateUrl('meetings_edit', array('id' => $event->getId())));
        }

        return $this->render('Meeting/edit.html.twig', array(
            'title' => 'CRM - Meetings',
            'form' => $form->createView(),
        ));
    }

    public function edit(int $id, Request $request): Response
    {
        $event = $this->getDoctrine()->getRepository(Event::class)->find($id);

        $form = $this->createForm(MeetingType::class, $event, array(
            'method' => 'PUT',
        ));

        $form->handleRequest($request);

        if ($form->isSubmitted() && $form->isValid()) {
            $event = $form->getData();

            $entityManager = $this->getDoctrine()->getManager();
            $entityManager->persist($event);
            $entityManager->flush();

            $session = new Session();

            $session->getFlashBag()->add('success', 'Meeting has been saved.');


            return $this->redirect($this->generateUrl('meetings_edit', array('id' => $event->getId())));
        }

        return $this->render('Meeting/edit.html.twig', array(
            'title' => 'CRM - Meetings',
            'form' => $form->createView(),
            'event' => $event,
        ));
    }

    public function delete(Request $request): JsonResponse
    {
        $meetingId = $request->request->get('id');

        $meeting = $this->getDoctrine()->getRepository(Event::class)->find($meetingId);

        if (!$meeting) {
            return new JsonResponse(array(
                'success' => false,
                'payload' => array(),
            ));
        }

        $entityManager = $this->getDoctrine()->getManager();
        $entityManager->remove($meeting);
        $entityManager->flush();

        return new JsonResponse(array(
            'success' => true,
            'payload' => array(
                'redirect-url' => $this->generateUrl('meetings'),
            ),
        ));
    }
}