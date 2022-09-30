-- CreateTable
CREATE TABLE `bhub_clients` (
    `id_client` VARCHAR(255) NOT NULL,
    `corporate_name` VARCHAR(255) NOT NULL,
    `cnpj_number` VARCHAR(255) NOT NULL,
    `telephone_number` VARCHAR(255) NOT NULL,
    `address_city` VARCHAR(255) NOT NULL,
    `date_register_account` VARCHAR(255) NOT NULL,
    `billing_declared` VARCHAR(255) NOT NULL,
    `status_account` VARCHAR(255) NOT NULL,

    UNIQUE INDEX `bhub_clients_cnpj_number_key`(`cnpj_number`),
    PRIMARY KEY (`id_client`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `bhub_data_banks` (
    `id_bank` VARCHAR(255) NOT NULL,
    `agency_account` VARCHAR(255) NOT NULL,
    `account_bank` VARCHAR(255) NOT NULL,
    `bank_name` VARCHAR(255) NOT NULL,
    `id_fk_client` VARCHAR(255) NOT NULL,

    PRIMARY KEY (`id_bank`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `bhub_data_banks` ADD CONSTRAINT `bhub_data_banks_id_fk_client_fkey` FOREIGN KEY (`id_fk_client`) REFERENCES `bhub_clients`(`id_client`) ON DELETE RESTRICT ON UPDATE CASCADE;
