<?php

namespace App\Form\Meeting;

use App\Entity\Event\Event;
use Symfony\Component\Form\AbstractType;
use Symfony\Component\Form\Extension\Core\Type\ButtonType;
use Symfony\Component\Form\Extension\Core\Type\DateTimeType;
use Symfony\Component\Form\FormBuilderInterface;
use Symfony\Component\OptionsResolver\OptionsResolver;
use Symfony\Component\Form\Extension\Core\Type\TextType;
use Symfony\Component\Form\Extension\Core\Type\SubmitType;

class MeetingType extends AbstractType
{
    public function buildForm(FormBuilderInterface $builder, array $options)
    {

        $builder->add('title', TextType::class, array(
                'label' => 'Title',
            ))
            ->add('beginAt', DateTimeType::class, array(
                'label' => 'Create Date',
                'widget' => 'single_text',
                'format' => 'yyyy-MM-dd HH:mm',
            ))
            ->add('endAt', DateTimeType::class, array(
                'label' => 'End Date',
                'widget' => 'single_text',
                'format' => 'yyyy-MM-dd HH:mm',
            ))
            ->add('submit', SubmitType::class, array(
                'label' => 'Save',
                'attr' => array(
                    'class' => 'btn btn-success btn-save',
                )
            ))
            ->add('delete', ButtonType::class, array(
               'label' => 'Delete',
                'attr' => array(
                    'class' => 'btn btn-danger btn-save',
                )
            ));


    }

    public function configureOptions(OptionsResolver $resolver)
    {
        $resolver->setDefaults(
            array(
                'data_class' => Event::class,
            )
        );
    }

}