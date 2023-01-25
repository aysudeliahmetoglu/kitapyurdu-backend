-- CreateTable
CREATE TABLE "BookPoduct" (
    "id" SERIAL NOT NULL,
    "title" TEXT NOT NULL,
    "link1" TEXT,
    "img1" TEXT,
    "price" DECIMAL(65,30),

    CONSTRAINT "BookPoduct_pkey" PRIMARY KEY ("id")
);
