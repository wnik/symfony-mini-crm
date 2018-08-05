<?php

namespace App\Controller\Invoice;

use App\Factory\Invoice\InvoiceFactoryInterface;
use Symfony\Bundle\FrameworkBundle\Controller\Controller;
use App\Form\Invoice\InvoiceType;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;

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
        $invoice = $this->invoiceFactory->create();
        $form = $this->createForm(InvoiceType::class, $invoice);

        $form->handleRequest($request);


        return $this->render('Invoice/new.html.twig', array(
           'title' => 'CRM - New Invoice',
            'form' => $form->createView(),
        ));
    }
}