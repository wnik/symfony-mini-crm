<?php

namespace App\Controller\Employee;

use App\Entity\Employee\Employee;
use App\Form\Employee\EmployeeType;
use App\Entity\Search;
use App\Form\SearchSidebarType;
use Symfony\Bundle\FrameworkBundle\Controller\Controller;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Session\Session;

class EmployeeController extends Controller
{

    /**
     * @return \Symfony\Component\HttpFoundation\Response
     * List of all employees
     */
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

    public function add(Request $request)
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

    public function edit(int $id, Request $request)
    {
        $repository = $this->getDoctrine()->getRepository(Employee::class);

        $employee = $repository->find($id);

        $picture = $employee->getPicture();

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

    public function delete(Request $request)
    {
        $response = array(
          'success' => false,
          'payload' => null,
        );

        $ids = $request->get('ids');

        $token = $request->request->get('token');

        if (!$ids || !$token || !$this->isCsrfTokenValid('employees-delete', $token)) {
            return new JsonResponse($response);
        }

        $entityManager = $this->getDoctrine()->getManager();
        $repository = $this->getDoctrine()->getRepository(Employee::class);
        $connection = $this->getDoctrine()->getConnection();

        $connection->setAutoCommit(false);

        $connection->beginTransaction();

        $isNotFound = false;

        try {
            foreach ($ids as $id) {
                $employee = $repository->find($id);

                if (!$employee) {
                    $connection->rollback();
                    $connection->close();

                    $isNotFound = true;

                    break;
                }

//                if ($employee->getUser()) {
//                    $entityManager->remove($employee->getUser());
//                    $entityManager->flush();
//                }

                $entityManager->remove($employee);
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
