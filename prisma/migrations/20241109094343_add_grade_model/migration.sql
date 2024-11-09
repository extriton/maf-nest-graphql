-- CreateTable
CREATE TABLE "Grades" (
    "code" TEXT NOT NULL,
    "level" INTEGER NOT NULL DEFAULT 1,
    "base_speed" DOUBLE PRECISION NOT NULL,
    "price" DOUBLE PRECISION NOT NULL,
    "image" TEXT NOT NULL,
    "name" TEXT NOT NULL,

    CONSTRAINT "Grades_pkey" PRIMARY KEY ("code","level")
);
