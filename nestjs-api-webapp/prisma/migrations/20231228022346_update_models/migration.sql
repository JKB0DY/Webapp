/*
  Warnings:

  - You are about to drop the `Hardware` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `User` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
DROP TABLE "Hardware";

-- DropTable
DROP TABLE "User";

-- CreateTable
CREATE TABLE "users" (
    "id" SERIAL NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "email" TEXT NOT NULL,
    "hash" TEXT NOT NULL,
    "firstName" TEXT,
    "lastName" TEXT,

    CONSTRAINT "users_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "hardware" (
    "id" SERIAL NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "modell" TEXT NOT NULL,
    "description" TEXT,
    "image" TEXT,
    "kaufdatum" TIMESTAMP(3),
    "inhaber" TEXT,
    "hersteller" TEXT,
    "seriennummer" TEXT,
    "typ" TEXT,
    "zustand" TEXT,
    "zustandBeschreibung" TEXT,
    "zustandDatum" TIMESTAMP(3),
    "zustandUserID" INTEGER,
    "pruefungsDatum" TIMESTAMP(3),

    CONSTRAINT "hardware_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "users_email_key" ON "users"("email");

-- AddForeignKey
ALTER TABLE "hardware" ADD CONSTRAINT "hardware_zustandUserID_fkey" FOREIGN KEY ("zustandUserID") REFERENCES "users"("id") ON DELETE SET NULL ON UPDATE CASCADE;
