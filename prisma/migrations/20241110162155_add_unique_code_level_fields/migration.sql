/*
  Warnings:

  - A unique constraint covering the columns `[code,level,type]` on the table `MinerItems` will be added. If there are existing duplicate values, this will fail.

*/
-- DropIndex
DROP INDEX "MinerItems_code_level_key";

-- CreateIndex
CREATE UNIQUE INDEX "MinerItems_code_level_type_key" ON "MinerItems"("code", "level", "type");
