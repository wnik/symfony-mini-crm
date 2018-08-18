<?php

namespace App\Form\DataTransformer;

use App\Entity\Payment\Payment;
use Symfony\Component\Form\DataTransformerInterface;

class PaymentTypeToPaymentTransformer implements DataTransformerInterface
{
    public function transform($payment)
    {
        if ($payment === null) {
            return '';
        }

        return $payment->getId();
    }

    public function reverseTransform($paymentType)
    {
        if (!$paymentType) {
            return;
        }

        $payment = new Payment();
        $payment->setType($paymentType);
        $payment->setUpdatedAt(new \DateTime());

        return $payment;
    }
}