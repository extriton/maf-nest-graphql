/*
  Warnings:

  - A unique constraint covering the columns `[code,level]` on the table `MinerItems` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "MinerItems_code_level_key" ON "MinerItems"("code", "level");
