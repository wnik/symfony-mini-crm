<?php

namespace App\Form\Invoice;

use App\Entity\Invoice\Item;
use App\Entity\Item\Item as BaseItem;
use App\Entity\VatRate\VatRate;
use Symfony\Bridge\Doctrine\Form\Type\EntityType;
use Symfony\Component\Form\AbstractType;
use Symfony\Component\Form\Extension\Core\Type\NumberType;
use Symfony\Component\Form\Extension\Core\Type\TextType;
use Symfony\Component\Form\FormBuilderInterface;
use Symfony\Component\OptionsResolver\OptionsResolver;

class ItemType extends AbstractType
{
    public function buildForm(FormBuilderInterface $builder, array $options)
    {
        $builder->add('item', EntityType::class, array(
                'class' => BaseItem::class,
                'label' => false,
                'choice_label' => 'getName',
            ))
            ->add('quantity', NumberType::class, array(
                'label' => false,
            ))
            ->add('price', NumberType::class, array(
                'label' => false,
            ))
            ->add('cost', NumberType::class, array(
                'label' => false,
            ))
            ->add('rate', TextType::class, array(
                'label' => false,
                'required' => false,
            ))
            ->add('vatRate', EntityType::class, array(
                'class' => VatRate::class,
                'label' => false,
                'choice_label' => 'getName',
            ));
    }

    public function configureOptions(OptionsResolver $resolver)
    {
        $resolver->setDefaults(array(
            'data_class' => Item::class,
        ));
    }
}
