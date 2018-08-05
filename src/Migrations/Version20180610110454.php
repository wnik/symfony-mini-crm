<?php declare(strict_types = 1);

namespace DoctrineMigrations;

use Doctrine\DBAL\Migrations\AbstractMigration;
use Doctrine\DBAL\Schema\Schema;

/**
 * Auto-generated Migration: Please modify to your needs!
 */
class Version20180610110454 extends AbstractMigration
{
    public function up(Schema $schema)
    {
        // this up() migration is auto-generated, please modify it to your needs
        $this->abortIf($this->connection->getDatabasePlatform()->getName() !== 'mysql', 'Migration can only be executed safely on \'mysql\'.');

        $this->addSql('DROP TABLE employee');
        $this->addSql('ALTER TABLE user ADD branch_id INT DEFAULT NULL, ADD job_title_id INT DEFAULT NULL, ADD first_name VARCHAR(25) NOT NULL, ADD last_name VARCHAR(25) NOT NULL, ADD phone VARCHAR(12) NOT NULL, ADD start_date DATETIME NOT NULL, ADD end_date DATETIME NOT NULL, ADD salary INT NOT NULL');
        $this->addSql('ALTER TABLE user ADD CONSTRAINT FK_8D93D649DCD6CC49 FOREIGN KEY (branch_id) REFERENCES branch (id)');
        $this->addSql('ALTER TABLE user ADD CONSTRAINT FK_8D93D6496DD822C6 FOREIGN KEY (job_title_id) REFERENCES job_title (id)');
        $this->addSql('CREATE INDEX IDX_8D93D649DCD6CC49 ON user (branch_id)');
        $this->addSql('CREATE INDEX IDX_8D93D6496DD822C6 ON user (job_title_id)');
    }

    public function down(Schema $schema)
    {
        // this down() migration is auto-generated, please modify it to your needs
        $this->abortIf($this->connection->getDatabasePlatform()->getName() !== 'mysql', 'Migration can only be executed safely on \'mysql\'.');

        $this->addSql('CREATE TABLE employee (id INT AUTO_INCREMENT NOT NULL, branch_id INT DEFAULT NULL, job_title_id INT DEFAULT NULL, first_name VARCHAR(25) NOT NULL COLLATE utf8_unicode_ci, last_name VARCHAR(25) NOT NULL COLLATE utf8_unicode_ci, email VARCHAR(255) NOT NULL COLLATE utf8_unicode_ci, phone VARCHAR(12) NOT NULL COLLATE utf8_unicode_ci, start_date DATETIME NOT NULL, end_date DATETIME NOT NULL, salary INT NOT NULL, is_active TINYINT(1) NOT NULL, INDEX IDX_5D9F75A1DCD6CC49 (branch_id), INDEX IDX_5D9F75A16DD822C6 (job_title_id), PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8 COLLATE utf8_unicode_ci ENGINE = InnoDB');
        $this->addSql('ALTER TABLE employee ADD CONSTRAINT FK_5D9F75A16DD822C6 FOREIGN KEY (job_title_id) REFERENCES job_title (id)');
        $this->addSql('ALTER TABLE employee ADD CONSTRAINT FK_5D9F75A1DCD6CC49 FOREIGN KEY (branch_id) REFERENCES branch (id)');
        $this->addSql('ALTER TABLE user DROP FOREIGN KEY FK_8D93D649DCD6CC49');
        $this->addSql('ALTER TABLE user DROP FOREIGN KEY FK_8D93D6496DD822C6');
        $this->addSql('DROP INDEX IDX_8D93D649DCD6CC49 ON user');
        $this->addSql('DROP INDEX IDX_8D93D6496DD822C6 ON user');
        $this->addSql('ALTER TABLE user DROP branch_id, DROP job_title_id, DROP first_name, DROP last_name, DROP phone, DROP start_date, DROP end_date, DROP salary');
    }
}
