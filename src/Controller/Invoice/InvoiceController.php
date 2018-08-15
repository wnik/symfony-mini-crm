<?php

namespace App\Controller\Invoice;

use App\Entity\Invoice\Invoice;
use App\Entity\Invoice\Type;
use App\Factory\Invoice\InvoiceFactoryInterface;
use App\Service\EntityRemover\EntityRemoverInterface;
use Symfony\Bundle\FrameworkBundle\Controller\Controller;
use App\Form\Invoice\InvoiceType;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use App\Entity\Item\Item;
use App\Entity\Invoice\Item as InvoiceItem;
use Symfony\Component\Security\Csrf\CsrfToken;
use Symfony\Component\HttpFoundation\Session\Session;

class InvoiceController extends Controller
{
    private $invoiceFactory;
    private $entityRemover;

    public function __construct(InvoiceFactoryInterface $invoiceFactory, EntityRemoverInterface $entityRemover)
    {
        $this->invoiceFactory = $invoiceFactory;
        $this->entityRemover = $entityRemover;
    }

    public function index(): Response
    {
        $invoices = $this->getDoctrine()->getRepository(Invoice::class)->findAll();

        return $this->render('Invoice/index.html.twig', array(
           'title' => 'CRM - Sales',
            'invoices' => $invoices,
        ));
    }

    public function delete(Request $request): JsonResponse
    {
        $response = $this->entityRemover->remove(Invoice::class,
            $request->request->get('ids'),
            new CsrfToken('invoices-delete',
                $request->request->get('token')
            )
        );

        return new JsonResponse(array(
            'success' => $response,
        ));
    }

    public function edit(int $id, Request $request): Response
    {
        $invoice = $this->getDoctrine()->getRepository(Invoice::class)->find($id);
        $items = $this->getDoctrine()->getRepository(Item::class)->findAll();

        $form = $this->createForm(InvoiceType::class, $invoice, array(
            'method' => 'PUT',
            'reference' => $invoice ? $invoice->getReference() : null,
        ));

        $form->handleRequest($request);

        if ($form->isSubmitted() && $form->isValid()) {

            $invoice = $form->getData();

            $entityManager = $this->getDoctrine()->getManager();

            $entityManager->persist($invoice);

            $entityManager->flush();

            $session = new Session();
            $session->getFlashBag()->add('success', 'Invoice has been saved.');

            return $this->redirect($this->generateUrl('invoices_edit', array('id' => $invoice->getId())));
        }

        return $this->render('Invoice/new.html.twig', array(
            'title' => 'CRM - Edit invoice',
            'invoice' => $invoice,
            'form' => $form->createView(),
            'items' => $items,
        ));
    }

    public function create(Request $request): Response
    {
        $itemRepository = $this->getDoctrine()->getRepository(Item::class);

        $items = $itemRepository->findAll();

        $invoice = $this->invoiceFactory->create();

        $invoiceItem = new InvoiceItem();
        $invoiceItem->setQuantity(0);
        $invoiceItem->setPrice(0);

        $invoice->addItem($invoiceItem);

        $form = $this->createForm(InvoiceType::class, $invoice, array(
            'reference' => $this->invoiceFactory->generateReference($this->getDoctrine()->getRepository(Type::class)->getDefault()),
        ));

        $form->handleRequest($request);

        if ($form->isSubmitted() && $form->isValid()) {

            $invoice = $form->getData();

            $reference = $this->invoiceFactory->generateReference($invoice->getType());

            $invoice->setReference($reference);

            $entityManager = $this->getDoctrine()->getManager();

            $entityManager->persist($invoice);

            $entityManager->flush();

            $session = new Session();
            $session->getFlashBag()->add('success', 'New invoice has been created.');

            return $this->redirect($this->generateUrl('invoices_edit', array('id' => $invoice->getId())));
        }

        return $this->render('Invoice/new.html.twig', array(
           'title' => 'CRM - New Invoice',
            'invoice' => $invoice,
            'form' => $form->createView(),
            'items' => $items,
        ));
    }
}