-- CreateEnum
CREATE TYPE "Type" AS ENUM ('MINER', 'FIGHTER');

-- CreateEnum
CREATE TYPE "Currency" AS ENUM ('COIN', 'USDT', 'NFT');

-- CreateEnum
CREATE TYPE "Rarity" AS ENUM ('common', 'uncommon', 'rare', 'epic', 'legendary');

-- CreateTable
CREATE TABLE "ShopItems" (
    "id" SERIAL NOT NULL,
    "code" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "type" "Type" NOT NULL DEFAULT 'MINER',
    "subtype" INTEGER NOT NULL DEFAULT 0,
    "currency" "Currency" NOT NULL DEFAULT 'COIN',
    "level" INTEGER NOT NULL DEFAULT 1,
    "base_speed" DOUBLE PRECISION NOT NULL,
    "price" DOUBLE PRECISION NOT NULL,
    "rarity" "Rarity" NOT NULL,
    "image" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "disabled" BOOLEAN NOT NULL DEFAULT true,

    CONSTRAINT "ShopItems_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "ShopItems_code_key" ON "ShopItems"("code");
