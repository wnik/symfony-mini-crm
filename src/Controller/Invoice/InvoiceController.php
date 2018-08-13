<?php

namespace App\Controller\Invoice;

use App\Entity\Invoice\Invoice;
use App\Entity\Invoice\Type;
use App\Factory\Invoice\InvoiceFactoryInterface;
use Symfony\Bundle\FrameworkBundle\Controller\Controller;
use App\Form\Invoice\InvoiceType;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use App\Entity\Item\Item;
use App\Entity\Invoice\Item as InvoiceItem;

class InvoiceController extends Controller
{
    private $invoiceFactory;

    public function __construct(InvoiceFactoryInterface $invoiceFactory)
    {
        $this->invoiceFactory = $invoiceFactory;
    }

    public function index(): Response
    {
        $invoices = $this->getDoctrine()->getRepository(Invoice::class)->findAll();

        return $this->render('Invoice/index.html.twig', array(
           'title' => 'CRM - Sales',
            'invoices' => $invoices,
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
        }

        return $this->render('Invoice/new.html.twig', array(
           'title' => 'CRM - New Invoice',
            'form' => $form->createView(),
            'items' => $items,
        ));
    }
}