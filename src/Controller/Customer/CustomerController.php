<?php

namespace App\Controller\Customer;

use App\Entity\Customer\Customer;
use App\Form\Customer\CustomerType;
use App\Service\EntityRemover\EntityRemoverInterface;
use Symfony\Bundle\FrameworkBundle\Controller\Controller;
use Symfony\Component\HttpFoundation\Request;
use App\Entity\Search;
use App\Form\SearchSidebarType;
use Symfony\Component\HttpFoundation\Session\Session;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\Security\Csrf\CsrfToken;

class CustomerController extends Controller
{
    private $entityRemover;

    public function __construct(EntityRemoverInterface $entityRemover)
    {
        $this->entityRemover = $entityRemover;
    }

    public function index(int $page, Request $request)
    {
        $search = new Search();

        $searchForm = $this->createForm(SearchSidebarType::class, $search);

        $searchForm->handleRequest($request);

        $searchQuery = null;

        if ($searchForm->isSubmitted() && $searchForm->isValid()) {
            $search = $searchForm->getData();

            $searchQuery = $search->getQuery();
        }

        $repository = $this->getDoctrine()->getRepository(Customer::class);

        $customers = $repository->findAllWithPagination($page, $searchQuery);

        $sidebars = array(
            $this->renderView('Customer/sidebars/search.html.twig', array(
                'form' => $searchForm->createView(),
            )),
        );

        return $this->render('Customer/index.html.twig', [
            'title' => 'CRM - Employees',
            'customers' => $customers,
            'sidebars' => $sidebars,
        ]);
    }


    public function add(Request $request)
    {
        $customer = new Customer();

        $form = $this->createForm(CustomerType::class, $customer, array(
            'method' => 'POST',
        ));

        $form->handleRequest($request);

        if ($form->isSubmitted() && $form->isValid()) {
            $customer = $form->getData();

            $entityManager = $this->getDoctrine()->getManager();

            $entityManager->persist($customer);
            $entityManager->flush();

            $session = new Session();
            $session->getFlashBag()->add('success', 'New customer has been added.');

            return $this->redirect($this->generateUrl('customers_edit', array('id' => $customer->getId())));
        }

        return $this->render('Customer/add.html.twig', [
            'title' => 'CRM - Add customer',
            'form' => $form->createView(),
        ]);
    }

    public function edit(int $id, Request $request)
    {
        $repository = $this->getDoctrine()->getRepository(Customer::class);

        $customer = $repository->find($id);

        $form = $this->createForm(CustomerType::class, $customer, array(
            'method' => 'PUT',
        ));

        $form->handleRequest($request);

        if ($form->isSubmitted() && $form->isValid()) {
            $customer = $form->getData();

            $entityManager = $this->getDoctrine()->getManager();

            $entityManager->persist($customer);
            $entityManager->flush();

            $session = new Session();
            $session->getFlashBag()->add('success', 'Customer has been saved.');

            $this->redirect($request->getUri());
        }

        return $this->render('Customer/edit.html.twig', [
            'title' => 'CRM - Customer edit',
            'customer' => $customer,
            'form' => $form->createView(),
        ]);
    }

    public function delete(Request $request): JsonResponse
    {
        $response = $this->entityRemover->remove(Customer::class,
            $request->request->get('ids'),
            new CsrfToken('customers-delete',
                $request->request->get('token')
            )
        );

        return new JsonResponse(array(
            'success' => $response,
        ));
    }
}