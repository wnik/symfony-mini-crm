<?php

namespace App\Controller\Menu;

use App\Entity\Menu\Menu;
use Symfony\Bundle\FrameworkBundle\Controller\Controller;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;

class MenuController extends Controller
{
    public function getMenu(Request $request): Response
    {
        $route = $request->attributes->get('_route');
        $repository = $this->getDoctrine()->getRepository(Menu::class);

        $menuItems = $repository->findAll();

        return $this->render('Menu/index.html.twig',[
                'items' => $menuItems,
                'route' => $route
            ]
        );
    }
}