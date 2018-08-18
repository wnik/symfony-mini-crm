<?php

namespace App\Entity;

use Doctrine\ORM\Mapping as ORM;
use Symfony\Component\Security\Core\User\EquatableInterface;
use Symfony\Component\Security\Core\User\UserInterface;

/**
 * @ORM\Entity(repositoryClass="App\Repository\UserRepository")
 */
class User implements UserInterface, \Serializable, EquatableInterface
{
    /**
     * @ORM\Id
     * @ORM\GeneratedValue
     * @ORM\Column(type="integer")
     */
    private $id;

    /**
     * @ORM\Column(type="string", length=25, unique=true)
     */
    private $username;

    /**
     * @ORM\Column(type="string", length=60, unique=true)
     */
    private $email;

    /**
     * @ORM\Column(type="string", length=64)
     */
    private $password;

    /**
     * @ORM\Column(name="is_active", type="boolean")
     */
    private $isActive;

    /**
     * @ORM\OneToOne(targetEntity="App\Entity\Employee\Employee", mappedBy="user")
     */
    private $employeeId;

    public function __construct()
    {
        $this->isActive = true;
    }


    public function serialize()
    {
       return serialize(
         array(
             $this->id,
             $this->email,
             $this->password
         )
       );
    }

    public function unserialize($serialized)
    {
        list (
            $this->id,
            $this->email,
            $this->password
            ) = unserialize($serialized);
    }

    public function setPassword($password)
    {
        $this->password = $password;
    }

    public function setUsername($name)
    {
        $this->username = $name;
    }

    public function setEmail($email)
    {
        $this->email = $email;
    }

    public function getRoles()
    {
        return array('ROLE_ADMIN');
    }

    public function getPassword()
    {
        return $this->password;
    }

    public function getSalt()
    {
        return null;
    }

    public function getUsername()
    {
        return $this->username;
    }

    public function getEmail()
    {
        return $this->email;
    }

    public function getEmployee()
    {
        return $this->employeeId;
    }


    public function eraseCredentials()
    {

    }

    public function isEqualTo(UserInterface $user)
    {
        if ($this->email !== $user->getEmail()) {
            return false;
        }

        if ($this->password !== $user->getPassword()) {
            return false;
        }

        return true;
    }
}
