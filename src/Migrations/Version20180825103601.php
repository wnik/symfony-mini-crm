<?php declare(strict_types=1);

namespace DoctrineMigrations;

use Doctrine\DBAL\Schema\Schema;
use Doctrine\Migrations\AbstractMigration;

/**
 * Auto-generated Migration: Please modify to your needs!
 */
final class Version20180825103601 extends AbstractMigration
{
    public function up(Schema $schema) : void
    {
        // this up() migration is auto-generated, please modify it to your needs
        $this->abortIf($this->connection->getDatabasePlatform()->getName() !== 'mysql', 'Migration can only be executed safely on \'mysql\'.');

        $this->addSql('ALTER TABLE customer ADD postal_code_id INT DEFAULT NULL, ADD tax_id_id INT DEFAULT NULL, ADD statistical_number_id INT DEFAULT NULL');
        $this->addSql('ALTER TABLE customer ADD CONSTRAINT FK_81398E09BDBA6A61 FOREIGN KEY (postal_code_id) REFERENCES postal_code (id)');
        $this->addSql('ALTER TABLE customer ADD CONSTRAINT FK_81398E09CC3E6B76 FOREIGN KEY (tax_id_id) REFERENCES tax_id (id)');
        $this->addSql('ALTER TABLE customer ADD CONSTRAINT FK_81398E0963B74A0B FOREIGN KEY (statistical_number_id) REFERENCES statistical_number (id)');
        $this->addSql('CREATE INDEX IDX_81398E09BDBA6A61 ON customer (postal_code_id)');
        $this->addSql('CREATE INDEX IDX_81398E09CC3E6B76 ON customer (tax_id_id)');
        $this->addSql('CREATE INDEX IDX_81398E0963B74A0B ON customer (statistical_number_id)');
    }

    public function down(Schema $schema) : void
    {
        // this down() migration is auto-generated, please modify it to your needs
        $this->abortIf($this->connection->getDatabasePlatform()->getName() !== 'mysql', 'Migration can only be executed safely on \'mysql\'.');

        $this->addSql('ALTER TABLE customer DROP FOREIGN KEY FK_81398E09BDBA6A61');
        $this->addSql('ALTER TABLE customer DROP FOREIGN KEY FK_81398E09CC3E6B76');
        $this->addSql('ALTER TABLE customer DROP FOREIGN KEY FK_81398E0963B74A0B');
        $this->addSql('DROP INDEX IDX_81398E09BDBA6A61 ON customer');
        $this->addSql('DROP INDEX IDX_81398E09CC3E6B76 ON customer');
        $this->addSql('DROP INDEX IDX_81398E0963B74A0B ON customer');
        $this->addSql('ALTER TABLE customer DROP postal_code_id, DROP tax_id_id, DROP statistical_number_id');
    }
}
