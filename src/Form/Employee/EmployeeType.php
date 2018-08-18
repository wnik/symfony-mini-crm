<?php

namespace App\Form\Employee;

use App\Entity\Branch\Branch;
use App\Entity\Employee\Employee;
use App\Entity\City\City;
use App\Entity\Country\Country;
use App\Entity\JobTitle\JobTitle;
use App\Form\UserEmailType;
use Symfony\Bridge\Doctrine\Form\Type\EntityType;
use Symfony\Component\Form\AbstractType;
use Symfony\Component\Form\Extension\Core\Type\DateType;
use Symfony\Component\Form\Extension\Core\Type\FileType;
use Symfony\Component\Form\Extension\Core\Type\MoneyType;
use Symfony\Component\Form\Extension\Core\Type\SubmitType;
use Symfony\Component\Form\Extension\Core\Type\TelType;
use Symfony\Component\Form\Extension\Core\Type\TextType;
use Symfony\Component\Form\FormBuilderInterface;
use Symfony\Component\OptionsResolver\OptionsResolver;

class EmployeeType extends AbstractType
{
    public function buildForm(FormBuilderInterface $builder, array $options)
    {
        $builder->add('firstName', TextType::class, array(
                'label' => 'First name',
            )
        )
            ->add('lastName', TextType::class, array(
                    'label' => 'Last name',
                    )
            )
            ->add('phone', TelType::class, array(
                    'label' => 'Phone number',
                )
            )
            ->add('user', UserEmailType::class, array(
                    'label' => 'Email',
                )
            )
            ->add('country', EntityType::class, array(
                    'class' => Country::class,
                    'label' => 'Country',
                    'choice_label' => 'name',
                    'choice_value' => 'id',
                    )
            )
            ->add('city', EntityType::class, array(
                    'class' => City::class,
                    'label' => 'City',
                    'choice_label' => 'name',
                    'choice_value' => 'id',
                    )
            )
            ->add('picture', FileType::class, array(
                    'label' => 'Picture',
                    'required' => false,
                    'data_class' => null,
                )
            )
            ->add('startDate', DateType::class, array(
                    'label' => 'Start date',
                    'widget' => 'single_text',
                )
            )
            ->add('endDate', DateType::class, array(
                    'label' => 'End date',
                    'widget' => 'single_text',
                    'required' => false,
                )
            )
            ->add('branch', EntityType::class, array(
                    'class' => Branch::class,
                    'label' => 'Branch',
                    'choice_label' => 'name',
                    'choice_value' => 'id',
                )
            )
            ->add('jobTitle', EntityType::class, array(
                    'class' => JobTitle::class,
                    'label' => 'Job title',
                    'choice_label' => 'name',
                    'choice_value' => 'id',
                )
            )
            ->add('salary', MoneyType::class, array(
                    'label' => 'Salary',
                    'currency' => '',
                )
            )
            ->add('submit', SubmitType::class, array(
                'label' => 'Save',
                'attr' => array(
                    'class' => 'btn btn-success btn-save',
                )
            ));
    }

    public function configureOptions(OptionsResolver $resolver)
    {
        $resolver->setDefaults(
          array(
              'data_class' => Employee::class,
          )
        );
    }
}