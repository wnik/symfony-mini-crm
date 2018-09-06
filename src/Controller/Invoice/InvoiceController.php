<?php

namespace App\Controller\Invoice;

use App\Entity\Invoice\Invoice;
use App\Entity\Invoice\Type;
use App\Factory\Invoice\InvoiceFactoryInterface;
use App\Helper\Calculator\ItemsSumByVatInterface;
use App\Service\EntityRemover\EntityRemoverInterface;
use App\Service\UserManagement\UserManagementInterface;
use Symfony\Bundle\FrameworkBundle\Controller\Controller;
use App\Form\Invoice\InvoiceType;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use App\Entity\Item\Item;
use Symfony\Component\Security\Csrf\CsrfToken;
use Symfony\Component\HttpFoundation\Session\Session;
use Knp\Snappy\Pdf;

class InvoiceController extends Controller
{
    private $invoiceFactory;
    private $entityRemover;
    private $userManagement;
    private $itemsSumByVat;

    public function __construct(InvoiceFactoryInterface $invoiceFactory, EntityRemoverInterface $entityRemover, UserManagementInterface $userManagement, ItemsSumByVatInterface $itemsSumByVat)
    {
        $this->invoiceFactory = $invoiceFactory;
        $this->entityRemover = $entityRemover;
        $this->userManagement = $userManagement;
        $this->itemsSumByVat = $itemsSumByVat;
    }

    public function index(): Response
    {
        $invoices = $this->getDoctrine()->getRepository(Invoice::class)->findAll();

        return $this->render('Invoice/index.html.twig', array(
           'title' => 'CRM - Sales',
            'invoices' => $invoices,
        ));
    }

    public function pdf(int $id, Request $request)
    {
        $invoice = $this->getDoctrine()->getRepository(Invoice::class)->find($id);

        $response = new Response();
        $response->headers->set('Content-Type', 'application/pdf');
        $response->headers->set('Content-Disposition', 'inline; filename="' . $invoice->getReference() . '.pdf"');

        $pdf = new Pdf('C:\"Program Files"\wkhtmltopdf\bin\wkhtmltopdf.exe');

        $this->itemsSumByVat->setItems($invoice->getItems());

        $template = $this->renderView('Invoice/pdf.html.twig', array(
           'title' => $invoice->getReference(),
            'invoice' => $invoice,
            'itemsSumByVat' => $this->itemsSumByVat->getData(),
        ));

        $response->setContent($pdf->getOutputFromHtml($template));

        return $response;
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

        $form = $this->createForm(InvoiceType::class, $invoice, array(
            'reference' => $this->invoiceFactory->generateReference($this->getDoctrine()->getRepository(Type::class)->getDefault()),
        ));

        $form->handleRequest($request);

        if ($form->isSubmitted() && $form->isValid()) {

            $invoice = $form->getData();
            $reference = $this->invoiceFactory->generateReference($invoice->getType());

            $invoice->setReference($reference);
            $invoice->setEmployee($this->userManagement->getEmployee());

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