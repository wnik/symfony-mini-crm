<?php

namespace App\Controller;

//use App\Entity\User;
use Symfony\Bundle\FrameworkBundle\Controller\Controller;
use Symfony\Component\HttpFoundation\Request;
use App\Form\LoginType;
//use Symfony\Component\Security\Core\Encoder\UserPasswordEncoderInterface;
use Symfony\Component\Security\Http\Authentication\AuthenticationUtils;

class DashboardController extends Controller
{
    public function index()
    {

        return $this->render('dashboard/index.html.twig', [
           'title' => 'CRM - Dashboard'
        ]);
    }

    public function redirectToDashboard()
    {
        return $this->redirectToRoute('dashboard');
    }

    public function login(Request $request, AuthenticationUtils $authUtils)
    {

        $error = $authUtils->getLastAuthenticationError();

        $lastUsername = $authUtils->getLastUsername();

        $form = $this->createForm(LoginType::class, [
            'email' => $lastUsername
        ]);

        return $this->render('dashboard/login.html.twig', [
            'title' => 'CRM - Dashboard Login',
            'form' => $form->createView(),
            'error' => $error
        ]);
    }

    public function auth()
    {

    }



//    public function register(UserPasswordEncoderInterface $encoder)
//    {
//        $em = $this->getDoctrine()->getManager();
//
//        $user = new User();
//        $plain = 'test123';
//
//        $encoded = $encoder->encodePassword($user, $plain);
//
//        $user->setUsername('admin');
//        $user->setEmail('test@gmail.com');
//        $user->setPassword($encoded);
//
//        $em->persist($user);
//        $em->flush();
//
//    }
}