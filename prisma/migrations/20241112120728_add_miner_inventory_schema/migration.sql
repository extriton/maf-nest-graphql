-- CreateEnum
CREATE TYPE "MinerSlot" AS ENUM ('none', 's1', 's2', 's3', 's4');

-- CreateTable
CREATE TABLE "MinerInventory" (
    "id" SERIAL NOT NULL,
    "user_id" INTEGER NOT NULL,
    "code" TEXT NOT NULL,
    "level" INTEGER NOT NULL DEFAULT 1,
    "type" "MinerItemType" NOT NULL DEFAULT 'COIN',
    "slot" "MinerSlot" NOT NULL DEFAULT 'none',

    CONSTRAINT "MinerInventory_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Users" (
    "id" SERIAL NOT NULL,
    "tg_id" INTEGER NOT NULL,
    "name" TEXT,
    "coin_balance" DOUBLE PRECISION NOT NULL DEFAULT 0,
    "total_coin_balance" DOUBLE PRECISION NOT NULL DEFAULT 0,
    "is_premium" BOOLEAN NOT NULL DEFAULT false,
    "is_banned" BOOLEAN NOT NULL DEFAULT false,
    "lastClaimAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "refer_tg_id" INTEGER NOT NULL DEFAULT 0,
    "referCoinBalance" DOUBLE PRECISION NOT NULL DEFAULT 0,

    CONSTRAINT "Users_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "MinerInventory_code_level_type_key" ON "MinerInventory"("code", "level", "type");

-- CreateIndex
CREATE UNIQUE INDEX "Users_tg_id_key" ON "Users"("tg_id");

-- AddForeignKey
ALTER TABLE "MinerInventory" ADD CONSTRAINT "MinerInventory_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "Users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "MinerInventory" ADD CONSTRAINT "MinerInventory_code_level_type_fkey" FOREIGN KEY ("code", "level", "type") REFERENCES "MinerItems"("code", "level", "type") ON DELETE RESTRICT ON UPDATE CASCADE;
