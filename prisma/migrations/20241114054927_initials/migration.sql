-- CreateEnum
CREATE TYPE "OrderType" AS ENUM ('premium');

-- CreateEnum
CREATE TYPE "OrderCurrency" AS ENUM ('TON', 'USDT');

-- CreateTable
CREATE TABLE "Orders" (
    "id" TEXT NOT NULL,
    "user_id" INTEGER NOT NULL,
    "type" "OrderType" NOT NULL DEFAULT 'premium',
    "currency" "PaymentCurrency" NOT NULL DEFAULT 'TON',
    "amount" DOUBLE PRECISION NOT NULL DEFAULT 0,
    "status" "OrderStatus" NOT NULL DEFAULT 'created',
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Orders_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Orders" ADD CONSTRAINT "Orders_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "Users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
