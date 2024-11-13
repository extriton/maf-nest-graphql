-- CreateEnum
CREATE TYPE "PaymentCurrency" AS ENUM ('TON', 'USDT');

-- CreateEnum
CREATE TYPE "OrderStatus" AS ENUM ('created', 'processed');

-- CreateTable
CREATE TABLE "Payments" (
    "id" TEXT NOT NULL,
    "user_id" INTEGER NOT NULL,
    "type" INTEGER NOT NULL DEFAULT 0,
    "currency" "PaymentCurrency" NOT NULL DEFAULT 'TON',
    "ammount" DOUBLE PRECISION NOT NULL DEFAULT 0,
    "status" "OrderStatus" NOT NULL DEFAULT 'created',

    CONSTRAINT "Payments_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Payments" ADD CONSTRAINT "Payments_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "Users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
