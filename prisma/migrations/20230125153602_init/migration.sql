/*
  Warnings:

  - You are about to drop the column `authorId` on the `Book` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE "Book" DROP CONSTRAINT "Book_authorId_fkey";

-- AlterTable
ALTER TABLE "Book" DROP COLUMN "authorId",
ALTER COLUMN "published" SET DEFAULT true;
