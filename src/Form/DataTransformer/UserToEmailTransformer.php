<?php

namespace App\Form\DataTransformer;

use App\Entity\User;
use Symfony\Component\Form\DataTransformerInterface;
use Symfony\Component\Security\Core\Encoder\UserPasswordEncoderInterface;

class UserToEmailTransformer implements DataTransformerInterface
{
    private $encoder;
    private $user;

    public function __construct(UserPasswordEncoderInterface $encoder)
    {
        $this->encoder = $encoder;
    }

    public function transform($user)
    {
        if (!$user) {
            return;
        }

        $this->user = $user;

        return $user->getEmail();
    }

    public function reverseTransform($email)
    {

        if (!$email) {
            return;
        }

        if (!$this->user) {
            $this->user = new User();

            $password = $this->encoder->encodePassword($this->user, random_bytes(12));

            $this->user->setUsername($email);
            $this->user->setPassword($password);
        }

        $this->user->setEmail($email);

        return $this->user;

    }
}