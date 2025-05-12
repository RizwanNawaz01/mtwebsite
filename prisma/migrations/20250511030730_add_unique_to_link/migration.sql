/*
  Warnings:

  - A unique constraint covering the columns `[link]` on the table `Entries` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX `Entries_link_key` ON `Entries`(`link`);
