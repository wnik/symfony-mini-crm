<?php


namespace App\Form\Document;

use App\Entity\Document\Document;
use Symfony\Component\Form\AbstractType;
use Symfony\Component\Form\Extension\Core\Type\FileType;
use Symfony\Component\Form\Extension\Core\Type\TextType;
use Symfony\Component\Form\FormBuilderInterface;
use Symfony\Component\OptionsResolver\OptionsResolver;
use Symfony\Component\Form\Extension\Core\Type\SubmitType;

class DocumentType extends AbstractType
{
    public function buildForm(FormBuilderInterface $builder, array $options)
    {
        $builder->add('file', FileType::class, array(
           'label' => 'Select file',
        ))
            ->add('description', TextType::class, array(
           'label' => 'Description',
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
        $resolver->setDefaults(array(
            'data_class' => Document::class,
        ));
    }
}