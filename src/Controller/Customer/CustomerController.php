<?php

namespace App\Controller\Customer;

use App\Entity\Customer\Customer;
use App\Form\Customer\CustomerType;
use Symfony\Bundle\FrameworkBundle\Controller\Controller;
use Symfony\Component\HttpFoundation\Request;
use App\Entity\Search;
use App\Form\SearchSidebarType;
use Symfony\Component\HttpFoundation\Session\Session;
use Symfony\Component\HttpFoundation\JsonResponse;

class CustomerController extends Controller
{
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

    public function delete(Request $request)
    {
        $response = array(
            'success' => false,
            'payload' => null,
        );

        $ids = $request->get('ids');

        $token = $request->request->get('token');

        if (!$ids || !$token || !$this->isCsrfTokenValid('customers-delete', $token)) {
            return new JsonResponse($response);
        }

        $entityManager = $this->getDoctrine()->getManager();
        $repository = $this->getDoctrine()->getRepository(Customer::class);
        $connection = $this->getDoctrine()->getConnection();

        $connection->setAutoCommit(false);

        $connection->beginTransaction();

        $isNotFound = false;

        try {
            foreach ($ids as $id) {
                $customer = $repository->find($id);

                if (!$customer) {
                    $connection->rollback();
                    $connection->close();

                    $isNotFound = true;

                    break;
                }

                $entityManager->remove($customer);
                $entityManager->flush();
            }

            if ($isNotFound) {
                return new JsonResponse($response);
            }

            $connection->commit();
            $connection->close();

            $response = array(
                'success' => true,
                'payload' => null,
            );

            return new JsonResponse($response);
        } catch (\Exception $e) {
            return new JsonResponse($response);
        }

    }
}