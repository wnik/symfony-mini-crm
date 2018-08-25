<?php declare(strict_types=1);

namespace DoctrineMigrations;

use Doctrine\DBAL\Schema\Schema;
use Doctrine\Migrations\AbstractMigration;

/**
 * Auto-generated Migration: Please modify to your needs!
 */
final class Version20180819203031 extends AbstractMigration
{
    public function up(Schema $schema) : void
    {
        // this up() migration is auto-generated, please modify it to your needs
        $this->abortIf($this->connection->getDatabasePlatform()->getName() !== 'mysql', 'Migration can only be executed safely on \'mysql\'.');

        $this->addSql('CREATE TABLE postal_code (id INT AUTO_INCREMENT NOT NULL, code VARCHAR(10) NOT NULL, PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci ENGINE = InnoDB');
        $this->addSql('ALTER TABLE branch ADD postal_code_id INT DEFAULT NULL, DROP postal_code');
        $this->addSql('ALTER TABLE branch ADD CONSTRAINT FK_BB861B1FBDBA6A61 FOREIGN KEY (postal_code_id) REFERENCES postal_code (id)');
        $this->addSql('CREATE INDEX IDX_BB861B1FBDBA6A61 ON branch (postal_code_id)');
    }

    public function down(Schema $schema) : void
    {
        // this down() migration is auto-generated, please modify it to your needs
        $this->abortIf($this->connection->getDatabasePlatform()->getName() !== 'mysql', 'Migration can only be executed safely on \'mysql\'.');

        $this->addSql('ALTER TABLE branch DROP FOREIGN KEY FK_BB861B1FBDBA6A61');
        $this->addSql('DROP TABLE postal_code');
        $this->addSql('DROP INDEX IDX_BB861B1FBDBA6A61 ON branch');
        $this->addSql('ALTER TABLE branch ADD postal_code VARCHAR(13) NOT NULL COLLATE utf8_unicode_ci, DROP postal_code_id');
    }
}
