/*
  Warnings:

  - Made the column `name` on table `Users` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE "Users" ALTER COLUMN "name" SET NOT NULL;

-- CreateTable
CREATE TABLE "FighterInventory" (
    "id" SERIAL NOT NULL,
    "user_id" INTEGER NOT NULL,
    "code" TEXT NOT NULL,
    "level" INTEGER NOT NULL DEFAULT 1,
    "type" "FighterItemType" NOT NULL DEFAULT 'COIN',

    CONSTRAINT "FighterInventory_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "FighterInventory" ADD CONSTRAINT "FighterInventory_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "Users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "FighterInventory" ADD CONSTRAINT "FighterInventory_code_level_type_fkey" FOREIGN KEY ("code", "level", "type") REFERENCES "FighterItems"("code", "level", "type") ON DELETE RESTRICT ON UPDATE CASCADE;
