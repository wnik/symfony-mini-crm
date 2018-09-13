<?php

namespace App\Entity\Menu;

use Doctrine\ORM\Mapping as ORM;

/**
 * @ORM\Entity(repositoryClass="App\Repository\Menu\SubmenuRepository")
 */
class Submenu
{
    /**
     * @ORM\Id
     * @ORM\GeneratedValue
     * @ORM\Column(type="integer")
     */
    private $id;

    /**
     * @ORM\Column(type="string", length=30)
     */
    private $name;

    /**
     * @ORM\Column(type="string", length=30)
     */
    private $slug;

    /**
     * @ORM\Column(type="string", length=15)
     */
    private $icon;

    /**
     * @ORM\ManyToOne(targetEntity="App\Entity\Menu\Menu", inversedBy="submenus")
     */
    private $menu;

    public function getName()
    {
        return $this->name;
    }

    public function getSlug()
    {
        return $this->slug;
    }

    public function getIcon()
    {
        return $this->icon;
    }

    /**
     * @return mixed
     */
    public function getMenu()
    {
        return $this->menu;
    }

    /**
     * @param mixed $menu
     */
    public function setMenu($menu): void
    {
        $this->menu = $menu;
    }


}
