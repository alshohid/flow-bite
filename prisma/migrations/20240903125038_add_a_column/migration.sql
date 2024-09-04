/*
  Warnings:

  - Added the required column `imgDescription` to the `testimonial` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `testimonial` ADD COLUMN `imgDescription` VARCHAR(2000) NOT NULL;
