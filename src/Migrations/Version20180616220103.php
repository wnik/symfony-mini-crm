<?php declare(strict_types = 1);

namespace DoctrineMigrations;

use Doctrine\DBAL\Migrations\AbstractMigration;
use Doctrine\DBAL\Schema\Schema;

/**
 * Auto-generated Migration: Please modify to your needs!
 */
class Version20180616220103 extends AbstractMigration
{
    public function up(Schema $schema)
    {
        // this up() migration is auto-generated, please modify it to your needs
        $this->abortIf($this->connection->getDatabasePlatform()->getName() !== 'mysql', 'Migration can only be executed safely on \'mysql\'.');

        $this->addSql('CREATE TABLE city (id INT AUTO_INCREMENT NOT NULL, PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8 COLLATE utf8_unicode_ci ENGINE = InnoDB');
        $this->addSql('CREATE TABLE country (id INT AUTO_INCREMENT NOT NULL, PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8 COLLATE utf8_unicode_ci ENGINE = InnoDB');
        $this->addSql('ALTER TABLE branch ADD city_id INT DEFAULT NULL, ADD picture VARCHAR(255) NOT NULL, ADD postal_code VARCHAR(13) NOT NULL, ADD address1 VARCHAR(255) NOT NULL, ADD address2 VARCHAR(255) NOT NULL, ADD tax_id VARCHAR(255) NOT NULL, ADD statistical_number VARCHAR(255) NOT NULL');
        $this->addSql('ALTER TABLE branch ADD CONSTRAINT FK_BB861B1F8BAC62AF FOREIGN KEY (city_id) REFERENCES city (id)');
        $this->addSql('CREATE INDEX IDX_BB861B1F8BAC62AF ON branch (city_id)');
        $this->addSql('ALTER TABLE employee ADD city_id INT DEFAULT NULL');
        $this->addSql('ALTER TABLE employee ADD CONSTRAINT FK_5D9F75A18BAC62AF FOREIGN KEY (city_id) REFERENCES city (id)');
        $this->addSql('CREATE INDEX IDX_5D9F75A18BAC62AF ON employee (city_id)');
    }

    public function down(Schema $schema)
    {
        // this down() migration is auto-generated, please modify it to your needs
        $this->abortIf($this->connection->getDatabasePlatform()->getName() !== 'mysql', 'Migration can only be executed safely on \'mysql\'.');

        $this->addSql('ALTER TABLE branch DROP FOREIGN KEY FK_BB861B1F8BAC62AF');
        $this->addSql('ALTER TABLE employee DROP FOREIGN KEY FK_5D9F75A18BAC62AF');
        $this->addSql('DROP TABLE city');
        $this->addSql('DROP TABLE country');
        $this->addSql('DROP INDEX IDX_BB861B1F8BAC62AF ON branch');
        $this->addSql('ALTER TABLE branch DROP city_id, DROP picture, DROP postal_code, DROP address1, DROP address2, DROP tax_id, DROP statistical_number');
        $this->addSql('DROP INDEX IDX_5D9F75A18BAC62AF ON employee');
        $this->addSql('ALTER TABLE employee DROP city_id');
    }
}
