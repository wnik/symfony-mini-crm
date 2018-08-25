<?php declare(strict_types=1);

namespace DoctrineMigrations;

use Doctrine\DBAL\Schema\Schema;
use Doctrine\Migrations\AbstractMigration;

/**
 * Auto-generated Migration: Please modify to your needs!
 */
final class Version20180825100052 extends AbstractMigration
{
    public function up(Schema $schema) : void
    {
        // this up() migration is auto-generated, please modify it to your needs
        $this->abortIf($this->connection->getDatabasePlatform()->getName() !== 'mysql', 'Migration can only be executed safely on \'mysql\'.');

        $this->addSql('ALTER TABLE branch ADD statistical_number_id INT DEFAULT NULL, DROP statistical_number');
        $this->addSql('ALTER TABLE branch ADD CONSTRAINT FK_BB861B1F63B74A0B FOREIGN KEY (statistical_number_id) REFERENCES statistical_number (id)');
        $this->addSql('CREATE INDEX IDX_BB861B1F63B74A0B ON branch (statistical_number_id)');
    }

    public function down(Schema $schema) : void
    {
        // this down() migration is auto-generated, please modify it to your needs
        $this->abortIf($this->connection->getDatabasePlatform()->getName() !== 'mysql', 'Migration can only be executed safely on \'mysql\'.');

        $this->addSql('ALTER TABLE branch DROP FOREIGN KEY FK_BB861B1F63B74A0B');
        $this->addSql('DROP INDEX IDX_BB861B1F63B74A0B ON branch');
        $this->addSql('ALTER TABLE branch ADD statistical_number VARCHAR(255) NOT NULL COLLATE utf8_unicode_ci, DROP statistical_number_id');
    }
}
