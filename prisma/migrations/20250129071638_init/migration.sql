-- CreateTable
CREATE TABLE `Podcasts` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `image` VARCHAR(191) NOT NULL,
    `youtube` VARCHAR(191) NOT NULL,
    `spotify` VARCHAR(191) NOT NULL,

    UNIQUE INDEX `Podcasts_id_key`(`id`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
