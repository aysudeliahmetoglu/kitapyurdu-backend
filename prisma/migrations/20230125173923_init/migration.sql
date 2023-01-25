-- CreateTable
CREATE TABLE "RelatedBook" (
    "id" SERIAL NOT NULL,
    "title" TEXT NOT NULL,
    "link1" TEXT,
    "img1" TEXT,
    "price" DECIMAL(65,30),

    CONSTRAINT "RelatedBook_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "KidBook" (
    "id" SERIAL NOT NULL,
    "title" TEXT NOT NULL,
    "link1" TEXT,
    "img1" TEXT,
    "price" DECIMAL(65,30),

    CONSTRAINT "KidBook_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "BestSeller" (
    "id" SERIAL NOT NULL,
    "title" TEXT NOT NULL,
    "link1" TEXT,
    "img1" TEXT,
    "price" DECIMAL(65,30),

    CONSTRAINT "BestSeller_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "NewBook" (
    "id" SERIAL NOT NULL,
    "title" TEXT NOT NULL,
    "link1" TEXT,
    "img1" TEXT,
    "price" DECIMAL(65,30),

    CONSTRAINT "NewBook_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "GlobalBook" (
    "id" SERIAL NOT NULL,
    "title" TEXT NOT NULL,
    "link1" TEXT,
    "img1" TEXT,
    "price" DECIMAL(65,30),

    CONSTRAINT "GlobalBook_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "ExamBook" (
    "id" SERIAL NOT NULL,
    "title" TEXT NOT NULL,
    "link1" TEXT,
    "img1" TEXT,
    "price" DECIMAL(65,30),

    CONSTRAINT "ExamBook_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "GameAndStuff" (
    "id" SERIAL NOT NULL,
    "title" TEXT NOT NULL,
    "link1" TEXT,
    "img1" TEXT,
    "price" DECIMAL(65,30),

    CONSTRAINT "GameAndStuff_pkey" PRIMARY KEY ("id")
);
