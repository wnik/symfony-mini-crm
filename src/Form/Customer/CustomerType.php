<?php

namespace App\Form\Customer;

use App\Entity\Customer\Customer;
use Symfony\Component\Form\AbstractType;
use Symfony\Component\Form\Extension\Core\Type\EmailType;
use Symfony\Component\Form\Extension\Core\Type\SubmitType;
use Symfony\Component\Form\Extension\Core\Type\TelType;
use Symfony\Component\Form\Extension\Core\Type\TextType;
use Symfony\Component\Form\FormBuilderInterface;
use Symfony\Component\OptionsResolver\OptionsResolver;
use Symfony\Bridge\Doctrine\Form\Type\EntityType;
use App\Entity\Country\Country;
use App\Entity\City\City;
use App\Form\DataTransformer\{StringToStatisticalNumber, StringToTaxId, StringToPostalCode};

class CustomerType extends AbstractType
{
    private $stringToPostalCodeTransformer;
    private $stringToTaxIdTransformer;
    private $stringToStatisticalNumberTransformer;

    public function __construct(StringToPostalCode $stringToPostalCodeTransformer, StringToTaxId $stringToTaxIdTransformer, StringToStatisticalNumber $stringToStatisticalNumberTransformer)
    {
        $this->stringToPostalCodeTransformer = $stringToPostalCodeTransformer;
        $this->stringToTaxIdTransformer = $stringToTaxIdTransformer;
        $this->stringToStatisticalNumberTransformer = $stringToStatisticalNumberTransformer;
    }

    public function buildForm(FormBuilderInterface $builder, array $options)
    {
        $builder->add('firstName', TextType::class, array(
                'label' => 'First name',
            ))
            ->add('lastName', TextType::class, array(
                'label' => 'Last name',
            ))
            ->add('address1', TextType::class, array(
                'label' => 'Address',
            ))
            ->add('address2', TextType::class, array(
                'label' => 'Address line 2',
            ))
            ->add('postalCode', TextType::class, array(
                'label' => 'Postal Code',
                'required' => true,
            ))
            ->add('taxId', TextType::class, array(
                'label' => 'TAX ID',
                'required' => true,
            ))
            ->add('statisticalNumber', TextType::class, array(
                'label' => 'Statistical Number',
                'required' => true,
            ))
            ->add('country', EntityType::class, array(
                'class' => Country::class,
                'choice_label' => 'name',
                'choice_value' => 'id',
            ))
            ->add('city', EntityType::class, array(
                'class' => City::class,
                'choice_label' => 'name',
                'choice_value' => 'id',
            ))
            ->add('phone', TelType::class, array(
                'label' => 'Phone number',
            ))
            ->add('email', EmailType::class, array(
                'label' => 'Email',
            ))
            ->add('submit', SubmitType::class, array(
                'label' => 'Save',
                'attr' => array(
                    'class' => 'btn btn-success btn-save',
                )
            ));

        $builder->get('postalCode')->addModelTransformer($this->stringToPostalCodeTransformer);
        $builder->get('taxId')->addModelTransformer($this->stringToTaxIdTransformer);
        $builder->get('statisticalNumber')->addModelTransformer($this->stringToStatisticalNumberTransformer);
    }

    public function configureOptions(OptionsResolver $resolver)
    {
        $resolver->setDefaults(array(
           'data_class' => Customer::class,
        ));
    }
}