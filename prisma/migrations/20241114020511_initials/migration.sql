/*
  Warnings:

  - You are about to drop the column `ammount` on the `Payments` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Payments" DROP COLUMN "ammount",
ADD COLUMN     "amount" DOUBLE PRECISION NOT NULL DEFAULT 0;
