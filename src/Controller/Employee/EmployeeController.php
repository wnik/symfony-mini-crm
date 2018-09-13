<?php

namespace App\Controller\Employee;

use App\Entity\Employee\Employee;
use App\Form\Employee\EmployeeType;
use App\Entity\Search\Search;
use App\Form\SearchSidebarType;
use App\Service\EntityRemover\EntityRemoverInterface;
use Symfony\Bundle\FrameworkBundle\Controller\Controller;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\HttpFoundation\Session\Session;
use Symfony\Component\Security\Csrf\CsrfToken;

class EmployeeController extends Controller
{
    private $entityRemover;

    public function __construct(EntityRemoverInterface $entityRemover)
    {
        $this->entityRemover = $entityRemover;
    }

    public function index(int $page, Request $request): Response
    {
        $search = new Search();

        $searchForm = $this->createForm(SearchSidebarType::class, $search);

        $searchForm->handleRequest($request);

        $searchQuery = null;

        if ($searchForm->isSubmitted() && $searchForm->isValid()) {
            $search = $searchForm->getData();

            $searchQuery = $search->getQuery();
        }

        $repository = $this->getDoctrine()->getRepository(Employee::class);

        $employees = $repository->findAllWithPagination($page, $searchQuery);

        $sidebars = array(
          $this->renderView('Employee/sidebars/search.html.twig', array(
              'form' => $searchForm->createView(),
          )),
        );

        return $this->render('Employee/index.html.twig', [
            'title' => 'CRM - Employees',
            'employees' => $employees,
            'sidebars' => $sidebars,
        ]);
    }

    public function add(Request $request): Response
    {
        $employee = new Employee();

        $form = $this->createForm(EmployeeType::class, $employee, array(
            'method' => 'POST',
        ));

        $form->handleRequest($request);

        if ($form->isSubmitted() && $form->isValid()) {
            $employee = $form->getData();

            $entityManager = $this->getDoctrine()->getManager();

            $entityManager->persist($employee);
            $entityManager->flush();

            $session = new Session();
            $session->getFlashBag()->add('success', 'New employee has been added. Password has been sent to an email.');

            return $this->redirect($this->generateUrl('employees_edit', array('id' => $employee->getId())));
        }

        return $this->render('Employee/add.html.twig', [
            'title' => 'CRM - Add employee',
            'form' => $form->createView(),
        ]);
    }

    public function edit(int $id, Request $request): Response
    {
        $repository = $this->getDoctrine()->getRepository(Employee::class);

        $employee = $repository->find($id);

        $picture = $employee ? $employee->getPicture() : null;

        $form = $this->createForm(EmployeeType::class, $employee, array(
            'method' => 'PUT',
        ));

        $form->handleRequest($request);

        if ($form->isSubmitted() && $form->isValid()) {
            $employee = $form->getData();

            if ($picture && !$employee->getPicture()) {
                $employee->setPicture($picture);
            }

            $entityManager = $this->getDoctrine()->getManager();

            $entityManager->persist($employee);
            $entityManager->flush();

            $session = new Session();
            $session->getFlashBag()->add('success', 'Employee has been saved.');

            $this->redirect($request->getUri());
        }

        return $this->render('Employee/edit.html.twig', [
            'title' => 'CRM - Employee edit',
            'employee' => $employee,
            'form' => $form->createView(),
        ]);
    }

    public function delete(Request $request): JsonResponse
    {
        $response = $this->entityRemover->remove(Employee::class,
            $request->request->get('ids'),
            new CsrfToken('employees-delete',
                $request->request->get('token')
            )
        );

        return new JsonResponse(array(
            'success' => $response,
        ));
    }
}
