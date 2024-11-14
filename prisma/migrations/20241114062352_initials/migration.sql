/*
  Warnings:

  - The `currency` column on the `Orders` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - You are about to drop the `Payments` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "Payments" DROP CONSTRAINT "Payments_user_id_fkey";

-- AlterTable
ALTER TABLE "Orders" DROP COLUMN "currency",
ADD COLUMN     "currency" "OrderCurrency" NOT NULL DEFAULT 'TON';

-- DropTable
DROP TABLE "Payments";

-- DropEnum
DROP TYPE "PaymentCurrency";
