<?php declare(strict_types = 1);

namespace DoctrineMigrations;

use Doctrine\DBAL\Migrations\AbstractMigration;
use Doctrine\DBAL\Schema\Schema;

/**
 * Auto-generated Migration: Please modify to your needs!
 */
class Version20180804160703 extends AbstractMigration
{
    public function up(Schema $schema)
    {
        // this up() migration is auto-generated, please modify it to your needs
        $this->abortIf($this->connection->getDatabasePlatform()->getName() !== 'mysql', 'Migration can only be executed safely on \'mysql\'.');

        $this->addSql('CREATE TABLE invoice_items (id INT AUTO_INCREMENT NOT NULL, vat_rate_id INT DEFAULT NULL, invoice_id INT DEFAULT NULL, item_id INT DEFAULT NULL, price SMALLINT NOT NULL, rate DOUBLE PRECISION NOT NULL, INDEX IDX_DCC4B9F843897540 (vat_rate_id), INDEX IDX_DCC4B9F82989F1FD (invoice_id), INDEX IDX_DCC4B9F8126F525E (item_id), PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8 COLLATE utf8_unicode_ci ENGINE = InnoDB');
        $this->addSql('ALTER TABLE invoice_items ADD CONSTRAINT FK_DCC4B9F843897540 FOREIGN KEY (vat_rate_id) REFERENCES vat_rate (id)');
        $this->addSql('ALTER TABLE invoice_items ADD CONSTRAINT FK_DCC4B9F82989F1FD FOREIGN KEY (invoice_id) REFERENCES invoice (id)');
        $this->addSql('ALTER TABLE invoice_items ADD CONSTRAINT FK_DCC4B9F8126F525E FOREIGN KEY (item_id) REFERENCES item (id)');
        $this->addSql('DROP TABLE invoice_item');
    }

    public function down(Schema $schema)
    {
        // this down() migration is auto-generated, please modify it to your needs
        $this->abortIf($this->connection->getDatabasePlatform()->getName() !== 'mysql', 'Migration can only be executed safely on \'mysql\'.');

        $this->addSql('CREATE TABLE invoice_item (id INT AUTO_INCREMENT NOT NULL, vat_rate_id INT DEFAULT NULL, invoice_id INT DEFAULT NULL, item_id INT DEFAULT NULL, price SMALLINT NOT NULL, rate DOUBLE PRECISION NOT NULL, INDEX IDX_1DDE477B43897540 (vat_rate_id), INDEX IDX_1DDE477B2989F1FD (invoice_id), INDEX IDX_1DDE477B126F525E (item_id), PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8 COLLATE utf8_unicode_ci ENGINE = InnoDB');
        $this->addSql('ALTER TABLE invoice_item ADD CONSTRAINT FK_1DDE477B126F525E FOREIGN KEY (item_id) REFERENCES item (id)');
        $this->addSql('ALTER TABLE invoice_item ADD CONSTRAINT FK_1DDE477B2989F1FD FOREIGN KEY (invoice_id) REFERENCES invoice (id)');
        $this->addSql('ALTER TABLE invoice_item ADD CONSTRAINT FK_1DDE477B43897540 FOREIGN KEY (vat_rate_id) REFERENCES vat_rate (id)');
        $this->addSql('DROP TABLE invoice_items');
    }
}
