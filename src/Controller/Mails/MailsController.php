<?php

namespace App\Controller\Mails;

use App\Service\UnitsOfInformation\UnitsOfInformationInterface;
use Symfony\Bundle\FrameworkBundle\Controller\Controller;
use PhpImap;
use Pagerfanta\Adapter\ArrayAdapter;
use Pagerfanta\Pagerfanta;
use Symfony\Component\HttpFoundation\Response;

class MailsController extends Controller
{

    private $mailbox;
    private $unitsOfInformation;

    public function __construct(PhpImap\Mailbox $mailbox, UnitsOfInformationInterface $unitsOfInformation)
    {
        $this->mailbox            = $mailbox;
        $this->unitsOfInformation = $unitsOfInformation;
    }

    public function index(int $page): Response
    {
        $mails = $this->mailbox->searchMailbox();

        rsort($mails);

        $adapter = new ArrayAdapter($mails);
        $pagerfanta = new Pagerfanta($adapter);
        $pagerfanta->setMaxPerPage(14);
        $pagerfanta->setCurrentPage($page);

        $pageMailsIds = $pagerfanta->getCurrentPageResults();

        $pageMails = array();

        foreach ($pageMailsIds as $pageMailsId) {
            $pageMails[] = $this->mailbox->getMail($pageMailsId);
        }

        $quotaLimit = $this->unitsOfInformation->convert($this->mailbox->getQuotaLimit());
        $quotaUsage = $this->unitsOfInformation->convert($this->mailbox->getQuotaUsage());

        return $this->render('Mails/index.html.twig', array(
            'title'      => 'CRM - Mails',
            'mails'      => $pageMails,
            'pager' => $pagerfanta,
        ));
    }

    public function show(int $id): Response
    {
        $mail = $this->mailbox->getMail($id);

        return $this->render('Mails/show.html.twig', array(
           'title' => 'CRM - Mails',
            'mail' => $mail,
        ));
    }
}