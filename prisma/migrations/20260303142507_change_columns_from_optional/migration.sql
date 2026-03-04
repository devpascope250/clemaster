/*
  Warnings:

  - Made the column `excerpt` on table `blogs` required. This step will fail if there are existing NULL values in that column.
  - Made the column `content` on table `blogs` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE `blogs` MODIFY `excerpt` VARCHAR(191) NOT NULL,
    MODIFY `content` VARCHAR(191) NOT NULL;
