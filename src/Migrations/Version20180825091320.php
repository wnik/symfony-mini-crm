<?php declare(strict_types=1);

namespace DoctrineMigrations;

use Doctrine\DBAL\Schema\Schema;
use Doctrine\Migrations\AbstractMigration;

/**
 * Auto-generated Migration: Please modify to your needs!
 */
final class Version20180825091320 extends AbstractMigration
{
    public function up(Schema $schema) : void
    {
        // this up() migration is auto-generated, please modify it to your needs
        $this->abortIf($this->connection->getDatabasePlatform()->getName() !== 'mysql', 'Migration can only be executed safely on \'mysql\'.');

        $this->addSql('ALTER TABLE branch CHANGE tax_id tax_id_id INT DEFAULT NULL');
        $this->addSql('ALTER TABLE branch ADD CONSTRAINT FK_BB861B1FCC3E6B76 FOREIGN KEY (tax_id_id) REFERENCES tax_id (id)');
        $this->addSql('CREATE INDEX IDX_BB861B1FCC3E6B76 ON branch (tax_id_id)');
    }

    public function down(Schema $schema) : void
    {
        // this down() migration is auto-generated, please modify it to your needs
        $this->abortIf($this->connection->getDatabasePlatform()->getName() !== 'mysql', 'Migration can only be executed safely on \'mysql\'.');

        $this->addSql('ALTER TABLE branch DROP FOREIGN KEY FK_BB861B1FCC3E6B76');
        $this->addSql('DROP INDEX IDX_BB861B1FCC3E6B76 ON branch');
        $this->addSql('ALTER TABLE branch CHANGE tax_id_id tax_id INT DEFAULT NULL');
    }
}
