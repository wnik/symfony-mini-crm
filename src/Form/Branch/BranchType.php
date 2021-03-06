<?php

namespace App\Form\Branch;

use App\Entity\Branch\Branch;
use Symfony\Component\Form\AbstractType;
use Symfony\Component\Form\Extension\Core\Type\CheckboxType;
use Symfony\Component\Form\Extension\Core\Type\FileType;
use Symfony\Component\Form\FormBuilderInterface;
use Symfony\Component\Form\FormEvent;
use Symfony\Component\Form\FormEvents;
use Symfony\Component\OptionsResolver\OptionsResolver;
use Symfony\Component\Form\Extension\Core\Type\TextType;
use Symfony\Bridge\Doctrine\Form\Type\EntityType;
use Symfony\Component\Form\Extension\Core\Type\DateType;
use App\Entity\Country\Country;
use App\Entity\City\City;
use Symfony\Component\Form\Extension\Core\Type\SubmitType;
use App\Form\DataTransformer\{StringToStatisticalNumber, StringToTaxId, StringToPostalCode};

class BranchType extends AbstractType
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

        $builder->add('name', TextType::class, array(
                'label' => 'Name',
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
            ));

        $builder->get('postalCode')->addModelTransformer($this->stringToPostalCodeTransformer);
        $builder->get('taxId')->addModelTransformer($this->stringToTaxIdTransformer);
        $builder->get('statisticalNumber')->addModelTransformer($this->stringToStatisticalNumberTransformer);

        $builder->addEventListener(FormEvents::PRE_SET_DATA, function (FormEvent $event) use ($options) {
            $branch = $event->getData();
            $form = $event->getForm();

            $createDate = $branch->getCreateDate();
            $endDate = $branch->getEndDate();

            $createDate = $createDate && strtotime($createDate->format('Y-m-d')) ? $createDate : new \DateTime();
            $endDate = $endDate && strtotime($endDate->format('Y-m-d')) ? $endDate : new \DateTime();

            $form->add('create_date', DateType::class, array(
                        'label' => 'Create Date',
                        'widget' => 'single_text',
                        'data' => $createDate,
                    )
                )
                ->add('end_date', DateType::class, array(
                        'required' => false,
                        'label' => 'End Date',
                        'widget' => 'single_text',
                        'data' => $endDate,
                    )
                )
                ->add('picture', FileType::class, array(
                        'label' => 'Picture',
                        'required' => false,
                        'data_class' => null,
                    )
                )
                ->add('isActive', CheckboxType::class, array(
                        'label' => 'Is this branch active?',
                        'required' => false,
                    )
                )
                ->add('submit', SubmitType::class, array(
                    'label' => 'Save',
                    'attr' => array(
                        'class' => 'btn btn-success btn-save',
                    )
                ));
        });

    }

    public function configureOptions(OptionsResolver $resolver)
    {
        $resolver->setDefaults(
          array(
              'data_class' => Branch::class,
          )
        );
    }

}