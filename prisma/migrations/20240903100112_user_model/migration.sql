/*
  Warnings:

  - You are about to drop the column `otp` on the `users` table. All the data in the column will be lost.
  - You are about to alter the column `mobile` on the `users` table. The data in that column could be lost. The data in that column will be cast from `VarChar(50)` to `VarChar(15)`.
  - You are about to drop the `HeroSectionContent` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `company` to the `users` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `users` DROP COLUMN `otp`,
    ADD COLUMN `company` VARCHAR(50) NOT NULL,
    MODIFY `mobile` VARCHAR(15) NOT NULL;

-- DropTable
DROP TABLE `HeroSectionContent`;
