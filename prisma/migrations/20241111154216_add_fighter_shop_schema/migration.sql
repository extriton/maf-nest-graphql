-- CreateTable
CREATE TABLE "FighterShop" (
    "id" SERIAL NOT NULL,
    "code" TEXT NOT NULL,
    "level" INTEGER NOT NULL DEFAULT 1,
    "type" "FighterItemType" NOT NULL DEFAULT 'COIN',
    "disabled" BOOLEAN NOT NULL DEFAULT true,

    CONSTRAINT "FighterShop_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "FighterShop_code_level_type_key" ON "FighterShop"("code", "level", "type");

-- AddForeignKey
ALTER TABLE "FighterShop" ADD CONSTRAINT "FighterShop_code_level_type_fkey" FOREIGN KEY ("code", "level", "type") REFERENCES "FighterItems"("code", "level", "type") ON DELETE RESTRICT ON UPDATE CASCADE;
