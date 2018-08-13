<?php

namespace App\Form\Invoice;

use App\Entity\Currency\Currency;
use App\Entity\Customer\Customer;
use App\Entity\Invoice\Invoice;
use App\Entity\Invoice\Type;
use Symfony\Bridge\Doctrine\Form\Type\EntityType;
use Symfony\Component\Form\AbstractType;
use Symfony\Component\Form\Extension\Core\Type\CollectionType;
use Symfony\Component\Form\Extension\Core\Type\DateType;
use Symfony\Component\Form\Extension\Core\Type\NumberType;
use Symfony\Component\Form\Extension\Core\Type\SubmitType;
use Symfony\Component\Form\Extension\Core\Type\TextType;
use Symfony\Component\Form\FormBuilderInterface;
use Symfony\Component\OptionsResolver\OptionsResolver;

class InvoiceType extends AbstractType
{
    public function buildForm(FormBuilderInterface $builder, array $options)
    {
        $builder->add('reference', TextType::class, array(
                'label' => 'Reference',
                'required' => false,
                'disabled' => true,
                'attr' => array(
                  'placeholder' => $options['reference'],
                ),
            )
        )
            ->add('type', EntityType::class, array(
                    'class' => Type::class,
                    'choice_label' => 'name',
                    'label' => 'Type',
                )
            )
            ->add('issueDate', DateType::class, array(
                    'label' => 'Issue Date',
                    'widget' => 'single_text',
            ))
            ->add('dueDate', DateType::class, array(
                'label' => 'Due Date',
                'widget' => 'single_text',
            ))
            ->add('customer', EntityType::class, array(
                'class' => Customer::class,
                'choice_label' => 'getFullName',
                'label' => 'Customer',
                'placeholder' => 'Choose customer',
                'required' => true,
            ))
            ->add('currency', EntityType::class, array(
                'class' => Currency::class,
                'choice_label' => 'getFullName',
                'label' => 'Currency',
            ))
            ->add('rate', NumberType::class, array(
                'label' => 'Exchange rate',
                'scale' => 2,
                'required' => false,
            ))
            ->add('items', CollectionType::class, array(
                'by_reference' => false,
                'entry_type' => ItemType::class,
                'allow_add' => true,
                'allow_delete' => true,
            ))
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
                'data_class' => Invoice::class,
                'reference' => '',
            )
        );
    }
}