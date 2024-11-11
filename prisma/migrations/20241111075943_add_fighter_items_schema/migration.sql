/*
  Warnings:

  - The `rarity` column on the `MinerItems` table would be dropped and recreated. This will lead to data loss if there is data in the column.

*/
-- CreateEnum
CREATE TYPE "FighterItemType" AS ENUM ('COIN', 'USDT', 'NFT');

-- CreateEnum
CREATE TYPE "FighterItemRarity" AS ENUM ('common', 'uncommon', 'rare', 'epic', 'legendary');

-- CreateEnum
CREATE TYPE "MinerItemRarity" AS ENUM ('common', 'uncommon', 'rare', 'epic', 'legendary');

-- AlterTable
ALTER TABLE "MinerItems" DROP COLUMN "rarity",
ADD COLUMN     "rarity" "MinerItemRarity" NOT NULL DEFAULT 'common';

-- DropEnum
DROP TYPE "MinerItemTypeRarity";

-- CreateTable
CREATE TABLE "FighterItems" (
    "id" SERIAL NOT NULL,
    "code" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "type" "FighterItemType" NOT NULL DEFAULT 'COIN',
    "level" INTEGER NOT NULL DEFAULT 1,
    "nextLevel" BOOLEAN NOT NULL DEFAULT true,
    "cost" DOUBLE PRECISION NOT NULL,
    "rarity" "FighterItemRarity" NOT NULL DEFAULT 'common',
    "image" TEXT NOT NULL,
    "description" TEXT NOT NULL,

    CONSTRAINT "FighterItems_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "FighterItems_name_key" ON "FighterItems"("name");

-- CreateIndex
CREATE UNIQUE INDEX "FighterItems_code_level_type_key" ON "FighterItems"("code", "level", "type");
