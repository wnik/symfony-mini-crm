<?php declare(strict_types = 1);

namespace DoctrineMigrations;

use Doctrine\DBAL\Migrations\AbstractMigration;
use Doctrine\DBAL\Schema\Schema;

/**
 * Auto-generated Migration: Please modify to your needs!
 */
class Version20180612194358 extends AbstractMigration
{
    public function up(Schema $schema)
    {
        // this up() migration is auto-generated, please modify it to your needs
        $this->abortIf($this->connection->getDatabasePlatform()->getName() !== 'mysql', 'Migration can only be executed safely on \'mysql\'.');

        $this->addSql('CREATE TABLE employee (id INT AUTO_INCREMENT NOT NULL, branch_id INT DEFAULT NULL, job_title_id INT DEFAULT NULL, user_id INT DEFAULT NULL, first_name VARCHAR(25) NOT NULL, last_name VARCHAR(25) NOT NULL, phone VARCHAR(12) NOT NULL, start_date DATETIME NOT NULL, end_date DATETIME NOT NULL, salary INT NOT NULL, INDEX IDX_5D9F75A1DCD6CC49 (branch_id), INDEX IDX_5D9F75A16DD822C6 (job_title_id), UNIQUE INDEX UNIQ_5D9F75A1A76ED395 (user_id), PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8 COLLATE utf8_unicode_ci ENGINE = InnoDB');
        $this->addSql('ALTER TABLE employee ADD CONSTRAINT FK_5D9F75A1DCD6CC49 FOREIGN KEY (branch_id) REFERENCES branch (id)');
        $this->addSql('ALTER TABLE employee ADD CONSTRAINT FK_5D9F75A16DD822C6 FOREIGN KEY (job_title_id) REFERENCES job_title (id)');
        $this->addSql('ALTER TABLE employee ADD CONSTRAINT FK_5D9F75A1A76ED395 FOREIGN KEY (user_id) REFERENCES user (id)');
        $this->addSql('ALTER TABLE user DROP FOREIGN KEY FK_8D93D6496DD822C6');
        $this->addSql('ALTER TABLE user DROP FOREIGN KEY FK_8D93D649DCD6CC49');
        $this->addSql('DROP INDEX IDX_8D93D649DCD6CC49 ON user');
        $this->addSql('DROP INDEX IDX_8D93D6496DD822C6 ON user');
        $this->addSql('ALTER TABLE user DROP branch_id, DROP job_title_id, DROP first_name, DROP last_name, DROP phone, DROP start_date, DROP end_date, CHANGE salary employee_id INT NOT NULL');
    }

    public function down(Schema $schema)
    {
        // this down() migration is auto-generated, please modify it to your needs
        $this->abortIf($this->connection->getDatabasePlatform()->getName() !== 'mysql', 'Migration can only be executed safely on \'mysql\'.');

        $this->addSql('DROP TABLE employee');
        $this->addSql('ALTER TABLE user ADD branch_id INT DEFAULT NULL, ADD job_title_id INT DEFAULT NULL, ADD first_name VARCHAR(25) NOT NULL COLLATE utf8_unicode_ci, ADD last_name VARCHAR(25) NOT NULL COLLATE utf8_unicode_ci, ADD phone VARCHAR(12) NOT NULL COLLATE utf8_unicode_ci, ADD start_date DATETIME NOT NULL, ADD end_date DATETIME NOT NULL, CHANGE employee_id salary INT NOT NULL');
        $this->addSql('ALTER TABLE user ADD CONSTRAINT FK_8D93D6496DD822C6 FOREIGN KEY (job_title_id) REFERENCES job_title (id)');
        $this->addSql('ALTER TABLE user ADD CONSTRAINT FK_8D93D649DCD6CC49 FOREIGN KEY (branch_id) REFERENCES branch (id)');
        $this->addSql('CREATE INDEX IDX_8D93D649DCD6CC49 ON user (branch_id)');
        $this->addSql('CREATE INDEX IDX_8D93D6496DD822C6 ON user (job_title_id)');
    }
}
