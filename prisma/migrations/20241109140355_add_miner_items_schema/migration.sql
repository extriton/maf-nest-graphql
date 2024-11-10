-- CreateEnum
CREATE TYPE "MinerItemType" AS ENUM ('COIN', 'USDT', 'NFT');

-- CreateEnum
CREATE TYPE "MinerItemTypeRarity" AS ENUM ('common', 'uncommon', 'rare', 'epic', 'legendary');

-- CreateTable
CREATE TABLE "MinerItems" (
    "id" SERIAL NOT NULL,
    "code" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "type" "MinerItemType" NOT NULL DEFAULT 'COIN',
    "level" INTEGER NOT NULL DEFAULT 1,
    "nextLevel" BOOLEAN NOT NULL DEFAULT true,
    "speed" DOUBLE PRECISION NOT NULL,
    "cost" DOUBLE PRECISION NOT NULL,
    "rarity" "MinerItemTypeRarity" NOT NULL DEFAULT 'common',
    "image" TEXT NOT NULL,
    "description" TEXT NOT NULL,

    CONSTRAINT "MinerItems_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "WorkingData" (
    "id" SERIAL NOT NULL,
    "last_ton_tx_at" INTEGER NOT NULL,

    CONSTRAINT "WorkingData_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "MinerItems_code_key" ON "MinerItems"("code");

-- CreateIndex
CREATE UNIQUE INDEX "MinerItems_name_key" ON "MinerItems"("name");
