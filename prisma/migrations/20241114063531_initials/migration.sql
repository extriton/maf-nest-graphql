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
CREATE TYPE "OrderType" AS ENUM ('premium');

-- CreateEnum
CREATE TYPE "OrderCurrency" AS ENUM ('TON', 'USDT');

-- CreateEnum
CREATE TYPE "OrderStatus" AS ENUM ('created', 'processed');

-- CreateTable
CREATE TABLE "fighter_inventory" (
    "id" SERIAL NOT NULL,
    "user_id" INTEGER NOT NULL,
    "code" TEXT NOT NULL,
    "level" INTEGER NOT NULL DEFAULT 1,
    "type" "FighterItemType" NOT NULL DEFAULT 'COIN',

    CONSTRAINT "fighter_inventory_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "fighter_items" (
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

    CONSTRAINT "fighter_items_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "fighter_shop" (
    "id" SERIAL NOT NULL,
    "code" TEXT NOT NULL,
    "level" INTEGER NOT NULL DEFAULT 1,
    "type" "FighterItemType" NOT NULL DEFAULT 'COIN',
    "disabled" BOOLEAN NOT NULL DEFAULT true,

    CONSTRAINT "fighter_shop_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "miner_inventory" (
    "id" SERIAL NOT NULL,
    "user_id" INTEGER NOT NULL,
    "code" TEXT NOT NULL,
    "level" INTEGER NOT NULL DEFAULT 1,
    "type" "MinerItemType" NOT NULL DEFAULT 'COIN',
    "slot" "MinerSlot" NOT NULL DEFAULT 'none',
    "lastClaimAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "miner_inventory_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "miner_items" (
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

    CONSTRAINT "miner_items_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "miner_shop" (
    "id" SERIAL NOT NULL,
    "code" TEXT NOT NULL,
    "level" INTEGER NOT NULL DEFAULT 1,
    "type" "MinerItemType" NOT NULL DEFAULT 'COIN',
    "disabled" BOOLEAN NOT NULL DEFAULT true,

    CONSTRAINT "miner_shop_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "orders" (
    "id" SERIAL NOT NULL,
    "user_id" INTEGER NOT NULL,
    "type" "OrderType" NOT NULL DEFAULT 'premium',
    "currency" "OrderCurrency" NOT NULL DEFAULT 'TON',
    "amount" DOUBLE PRECISION NOT NULL DEFAULT 0,
    "status" "OrderStatus" NOT NULL DEFAULT 'created',
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "orders_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "users" (
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

    CONSTRAINT "users_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "working_data" (
    "id" SERIAL NOT NULL,
    "last_ton_tx_at" INTEGER NOT NULL,

    CONSTRAINT "working_data_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "fighter_items_code_level_type_key" ON "fighter_items"("code", "level", "type");

-- CreateIndex
CREATE UNIQUE INDEX "fighter_shop_code_level_type_key" ON "fighter_shop"("code", "level", "type");

-- CreateIndex
CREATE UNIQUE INDEX "miner_items_code_level_type_key" ON "miner_items"("code", "level", "type");

-- CreateIndex
CREATE UNIQUE INDEX "miner_shop_code_level_type_key" ON "miner_shop"("code", "level", "type");

-- CreateIndex
CREATE UNIQUE INDEX "users_tg_id_key" ON "users"("tg_id");

-- AddForeignKey
ALTER TABLE "fighter_inventory" ADD CONSTRAINT "fighter_inventory_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "fighter_inventory" ADD CONSTRAINT "fighter_inventory_code_level_type_fkey" FOREIGN KEY ("code", "level", "type") REFERENCES "fighter_items"("code", "level", "type") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "fighter_shop" ADD CONSTRAINT "fighter_shop_code_level_type_fkey" FOREIGN KEY ("code", "level", "type") REFERENCES "fighter_items"("code", "level", "type") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "miner_inventory" ADD CONSTRAINT "miner_inventory_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "miner_inventory" ADD CONSTRAINT "miner_inventory_code_level_type_fkey" FOREIGN KEY ("code", "level", "type") REFERENCES "miner_items"("code", "level", "type") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "miner_shop" ADD CONSTRAINT "miner_shop_code_level_type_fkey" FOREIGN KEY ("code", "level", "type") REFERENCES "miner_items"("code", "level", "type") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "orders" ADD CONSTRAINT "orders_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
