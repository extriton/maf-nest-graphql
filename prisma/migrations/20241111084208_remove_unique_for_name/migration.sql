-- DropIndex
DROP INDEX "FighterItems_name_key";

-- DropIndex
DROP INDEX "MinerItems_name_key";

-- AlterTable
ALTER TABLE "FighterItems" ALTER COLUMN "name" SET DEFAULT '';

-- AlterTable
ALTER TABLE "MinerItems" ALTER COLUMN "name" SET DEFAULT '';
