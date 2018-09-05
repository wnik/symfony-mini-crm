<?php

namespace App\Twig;

class CalculationExtension extends \Twig_Extension
{
    public function getFunctions()
    {
        return array(
            new \Twig_Function('calculation', array($this, 'calculate')),
        );
    }

    public function calculate(string $type, array $values = array(), $entity = null)
    {

        $type = 'App\Helper\Calculator\\' . ucfirst($type) . 'Calculator';

        if (class_exists($type)) {
            $calculator = new $type($values, $entity);
            
            return $calculator->calculate();
        }

        return null;
    }
}