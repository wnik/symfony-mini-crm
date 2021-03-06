<?php

namespace App\Entity\Menu;

use Doctrine\Common\Collections\ArrayCollection;
use Doctrine\ORM\Mapping as ORM;

/**
 * @ORM\Entity(repositoryClass="App\Repository\Menu\MenuRepository")
 */
class Menu
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
     * @ORM\OneToMany(targetEntity="App\Entity\Menu\Submenu", mappedBy="menu")
     */
    private $submenus;

    public function __construct()
    {
        $this->submenus = new ArrayCollection();
    }


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
    public function getSubmenus()
    {
        return $this->submenus;
    }

    /**
     * @param mixed $submenu
     */
    public function setSubmenus($submenus): void
    {
        $this->submenus = $submenus;
    }


}
