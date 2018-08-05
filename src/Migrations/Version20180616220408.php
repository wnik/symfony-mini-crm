<?php declare(strict_types = 1);

namespace DoctrineMigrations;

use Doctrine\DBAL\Migrations\AbstractMigration;
use Doctrine\DBAL\Schema\Schema;

/**
 * Auto-generated Migration: Please modify to your needs!
 */
class Version20180616220408 extends AbstractMigration
{
    public function up(Schema $schema)
    {
        // this up() migration is auto-generated, please modify it to your needs
        $this->abortIf($this->connection->getDatabasePlatform()->getName() !== 'mysql', 'Migration can only be executed safely on \'mysql\'.');

        $this->addSql('ALTER TABLE branch ADD country_id INT DEFAULT NULL');
        $this->addSql('ALTER TABLE branch ADD CONSTRAINT FK_BB861B1FF92F3E70 FOREIGN KEY (country_id) REFERENCES country (id)');
        $this->addSql('CREATE INDEX IDX_BB861B1FF92F3E70 ON branch (country_id)');
        $this->addSql('ALTER TABLE country ADD name VARCHAR(255) NOT NULL');
        $this->addSql('ALTER TABLE employee ADD country_id INT DEFAULT NULL');
        $this->addSql('ALTER TABLE employee ADD CONSTRAINT FK_5D9F75A1F92F3E70 FOREIGN KEY (country_id) REFERENCES country (id)');
        $this->addSql('CREATE INDEX IDX_5D9F75A1F92F3E70 ON employee (country_id)');
    }

    public function down(Schema $schema)
    {
        // this down() migration is auto-generated, please modify it to your needs
        $this->abortIf($this->connection->getDatabasePlatform()->getName() !== 'mysql', 'Migration can only be executed safely on \'mysql\'.');

        $this->addSql('ALTER TABLE branch DROP FOREIGN KEY FK_BB861B1FF92F3E70');
        $this->addSql('DROP INDEX IDX_BB861B1FF92F3E70 ON branch');
        $this->addSql('ALTER TABLE branch DROP country_id');
        $this->addSql('ALTER TABLE country DROP name');
        $this->addSql('ALTER TABLE employee DROP FOREIGN KEY FK_5D9F75A1F92F3E70');
        $this->addSql('DROP INDEX IDX_5D9F75A1F92F3E70 ON employee');
        $this->addSql('ALTER TABLE employee DROP country_id');
    }
}
