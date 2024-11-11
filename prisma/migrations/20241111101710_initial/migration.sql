-- CreateEnum
CREATE TYPE "FighterItemType" AS ENUM ('COIN', 'USDT', 'NFT');

-- CreateEnum
CREATE TYPE "FighterItemRarity" AS ENUM ('common', 'uncommon', 'rare', 'epic', 'legendary');

-- CreateEnum
CREATE TYPE "MinerItemType" AS ENUM ('COIN', 'USDT', 'NFT');

-- CreateEnum
CREATE TYPE "MinerItemRarity" AS ENUM ('common', 'uncommon', 'rare', 'epic', 'legendary');

-- CreateTable
CREATE TABLE "FighterItems" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL DEFAULT '',
    "code" TEXT NOT NULL,
    "level" INTEGER NOT NULL DEFAULT 1,
    "type" "FighterItemType" NOT NULL DEFAULT 'COIN',
    "nextLevel" BOOLEAN NOT NULL DEFAULT true,
    "cost" DOUBLE PRECISION NOT NULL,
    "rarity" "FighterItemRarity" NOT NULL DEFAULT 'common',
    "image" TEXT NOT NULL,
    "comment" TEXT NOT NULL,

    CONSTRAINT "FighterItems_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "MinerItems" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL DEFAULT '',
    "code" TEXT NOT NULL,
    "level" INTEGER NOT NULL DEFAULT 1,
    "type" "MinerItemType" NOT NULL DEFAULT 'COIN',
    "nextLevel" BOOLEAN NOT NULL DEFAULT true,
    "speed" DOUBLE PRECISION NOT NULL,
    "cost" DOUBLE PRECISION NOT NULL,
    "rarity" "MinerItemRarity" NOT NULL DEFAULT 'common',
    "image" TEXT NOT NULL,
    "comment" TEXT NOT NULL,

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
CREATE TABLE "WorkingData" (
    "id" SERIAL NOT NULL,
    "last_ton_tx_at" INTEGER NOT NULL,

    CONSTRAINT "WorkingData_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "FighterItems_code_level_type_key" ON "FighterItems"("code", "level", "type");

-- CreateIndex
CREATE UNIQUE INDEX "MinerItems_code_level_type_key" ON "MinerItems"("code", "level", "type");

-- CreateIndex
CREATE UNIQUE INDEX "MinerShop_code_level_type_key" ON "MinerShop"("code", "level", "type");

-- AddForeignKey
ALTER TABLE "MinerShop" ADD CONSTRAINT "MinerShop_code_level_type_fkey" FOREIGN KEY ("code", "level", "type") REFERENCES "MinerItems"("code", "level", "type") ON DELETE RESTRICT ON UPDATE CASCADE;
