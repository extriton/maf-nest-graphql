-- CreateEnum
CREATE TYPE "FighterItemType" AS ENUM ('COIN', 'USDT', 'NFT');

-- CreateEnum
CREATE TYPE "FighterItemRarity" AS ENUM ('common', 'uncommon', 'rare', 'epic', 'legendary');

-- CreateEnum
CREATE TYPE "MinerSlot" AS ENUM ('none', 's1', 's2', 's3', 's4');

-- CreateEnum
CREATE TYPE "MinerItemType" AS ENUM ('COIN', 'USDT', 'NFT');

-- CreateEnum
CREATE TYPE "MinerItemRarity" AS ENUM ('common', 'uncommon', 'rare', 'epic', 'legendary');

-- CreateEnum
CREATE TYPE "PaymentCurrency" AS ENUM ('TON', 'USDT');

-- CreateEnum
CREATE TYPE "OrderStatus" AS ENUM ('created', 'processed');

-- CreateTable
CREATE TABLE "FighterInventory" (
    "id" SERIAL NOT NULL,
    "user_id" INTEGER NOT NULL,
    "code" TEXT NOT NULL,
    "level" INTEGER NOT NULL DEFAULT 1,
    "type" "FighterItemType" NOT NULL DEFAULT 'COIN',

    CONSTRAINT "FighterInventory_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "FighterItems" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "code" TEXT NOT NULL,
    "level" INTEGER NOT NULL DEFAULT 1,
    "type" "FighterItemType" NOT NULL DEFAULT 'COIN',
    "nextLevel" BOOLEAN NOT NULL DEFAULT true,
    "cost" DOUBLE PRECISION NOT NULL,
    "rarity" "FighterItemRarity" NOT NULL DEFAULT 'common',
    "image" TEXT NOT NULL,
    "comment" TEXT NOT NULL DEFAULT '',

    CONSTRAINT "FighterItems_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "FighterShop" (
    "id" SERIAL NOT NULL,
    "code" TEXT NOT NULL,
    "level" INTEGER NOT NULL DEFAULT 1,
    "type" "FighterItemType" NOT NULL DEFAULT 'COIN',
    "disabled" BOOLEAN NOT NULL DEFAULT true,

    CONSTRAINT "FighterShop_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "MinerInventory" (
    "id" SERIAL NOT NULL,
    "user_id" INTEGER NOT NULL,
    "code" TEXT NOT NULL,
    "level" INTEGER NOT NULL DEFAULT 1,
    "type" "MinerItemType" NOT NULL DEFAULT 'COIN',
    "slot" "MinerSlot" NOT NULL DEFAULT 'none',
    "lastClaimAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "MinerInventory_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "MinerItems" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "code" TEXT NOT NULL,
    "level" INTEGER NOT NULL DEFAULT 1,
    "type" "MinerItemType" NOT NULL DEFAULT 'COIN',
    "nextLevel" BOOLEAN NOT NULL DEFAULT true,
    "speed" DOUBLE PRECISION NOT NULL,
    "cost" DOUBLE PRECISION NOT NULL,
    "rarity" "MinerItemRarity" NOT NULL DEFAULT 'common',
    "image" TEXT NOT NULL,
    "comment" TEXT NOT NULL DEFAULT '',

    CONSTRAINT "MinerItems_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "MinerShop" (
    "id" SERIAL NOT NULL,
    "code" TEXT NOT NULL,
    "level" INTEGER NOT NULL DEFAULT 1,
    "type" "MinerItemType" NOT NULL DEFAULT 'COIN',
    "disabled" BOOLEAN NOT NULL DEFAULT true,

    CONSTRAINT "MinerShop_pkey" PRIMARY KEY ("id")
);

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

-- CreateTable
CREATE TABLE "Users" (
    "id" SERIAL NOT NULL,
    "tg_id" INTEGER NOT NULL,
    "name" TEXT NOT NULL DEFAULT '',
    "coin_balance" DOUBLE PRECISION NOT NULL DEFAULT 0,
    "total_coin_balance" DOUBLE PRECISION NOT NULL DEFAULT 0,
    "is_premium" BOOLEAN NOT NULL DEFAULT false,
    "is_banned" BOOLEAN NOT NULL DEFAULT false,
    "lastClaimAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "refer_tg_id" INTEGER NOT NULL DEFAULT 0,
    "referCoinBalance" DOUBLE PRECISION NOT NULL DEFAULT 0,

    CONSTRAINT "Users_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "WorkingData" (
    "id" SERIAL NOT NULL,
    "last_ton_tx_at" INTEGER NOT NULL,

    CONSTRAINT "WorkingData_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "FighterItems_code_level_type_key" ON "FighterItems"("code", "level", "type");

-- CreateIndex
CREATE UNIQUE INDEX "FighterShop_code_level_type_key" ON "FighterShop"("code", "level", "type");

-- CreateIndex
CREATE UNIQUE INDEX "MinerItems_code_level_type_key" ON "MinerItems"("code", "level", "type");

-- CreateIndex
CREATE UNIQUE INDEX "MinerShop_code_level_type_key" ON "MinerShop"("code", "level", "type");

-- CreateIndex
CREATE UNIQUE INDEX "Users_tg_id_key" ON "Users"("tg_id");

-- AddForeignKey
ALTER TABLE "FighterInventory" ADD CONSTRAINT "FighterInventory_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "Users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "FighterInventory" ADD CONSTRAINT "FighterInventory_code_level_type_fkey" FOREIGN KEY ("code", "level", "type") REFERENCES "FighterItems"("code", "level", "type") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "FighterShop" ADD CONSTRAINT "FighterShop_code_level_type_fkey" FOREIGN KEY ("code", "level", "type") REFERENCES "FighterItems"("code", "level", "type") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "MinerInventory" ADD CONSTRAINT "MinerInventory_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "Users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "MinerInventory" ADD CONSTRAINT "MinerInventory_code_level_type_fkey" FOREIGN KEY ("code", "level", "type") REFERENCES "MinerItems"("code", "level", "type") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "MinerShop" ADD CONSTRAINT "MinerShop_code_level_type_fkey" FOREIGN KEY ("code", "level", "type") REFERENCES "MinerItems"("code", "level", "type") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Payments" ADD CONSTRAINT "Payments_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "Users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
