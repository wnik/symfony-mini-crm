<?php

namespace App\Controller\Invoice;

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


        return $this->render('Invoice/index.html.twig', array(
           'title' => 'CRM - Sales',
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

        $invoice->getItems()->add($invoiceItem);

        $form = $this->createForm(InvoiceType::class, $invoice, array(
            'reference' => $this->invoiceFactory->generateReference(),
        ));

        $form->handleRequest($request);

        if ($form->isSubmitted() && $form->isValid()) {

            $invoice = $form->getData();

            $invoice->setReference($this->invoiceFactory->generateReference());

        }

        return $this->render('Invoice/new.html.twig', array(
           'title' => 'CRM - New Invoice',
            'form' => $form->createView(),
            'items' => $items,
        ));
    }
}