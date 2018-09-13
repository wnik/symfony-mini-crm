<?php declare(strict_types=1);

namespace DoctrineMigrations;

use Doctrine\DBAL\Schema\Schema;
use Doctrine\Migrations\AbstractMigration;

/**
 * Auto-generated Migration: Please modify to your needs!
 */
final class Version20180909130308 extends AbstractMigration
{
    public function up(Schema $schema) : void
    {
        // this up() migration is auto-generated, please modify it to your needs
        $this->abortIf($this->connection->getDatabasePlatform()->getName() !== 'mysql', 'Migration can only be executed safely on \'mysql\'.');

        $this->addSql('ALTER TABLE menu DROP FOREIGN KEY FK_7D053A9387B541DD');
        $this->addSql('DROP INDEX IDX_7D053A9387B541DD ON menu');
        $this->addSql('ALTER TABLE menu DROP submenu_id');
        $this->addSql('ALTER TABLE submenu ADD menu_id INT DEFAULT NULL');
        $this->addSql('ALTER TABLE submenu ADD CONSTRAINT FK_A4B04818CCD7E912 FOREIGN KEY (menu_id) REFERENCES menu (id)');
        $this->addSql('CREATE INDEX IDX_A4B04818CCD7E912 ON submenu (menu_id)');
    }

    public function down(Schema $schema) : void
    {
        // this down() migration is auto-generated, please modify it to your needs
        $this->abortIf($this->connection->getDatabasePlatform()->getName() !== 'mysql', 'Migration can only be executed safely on \'mysql\'.');

        $this->addSql('ALTER TABLE menu ADD submenu_id INT DEFAULT NULL');
        $this->addSql('ALTER TABLE menu ADD CONSTRAINT FK_7D053A9387B541DD FOREIGN KEY (submenu_id) REFERENCES submenu (id)');
        $this->addSql('CREATE INDEX IDX_7D053A9387B541DD ON menu (submenu_id)');
        $this->addSql('ALTER TABLE submenu DROP FOREIGN KEY FK_A4B04818CCD7E912');
        $this->addSql('DROP INDEX IDX_A4B04818CCD7E912 ON submenu');
        $this->addSql('ALTER TABLE submenu DROP menu_id');
    }
}
