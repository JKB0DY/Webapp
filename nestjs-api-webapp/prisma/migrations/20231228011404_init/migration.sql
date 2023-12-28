-- CreateTable
CREATE TABLE "User" (
    "id" SERIAL NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "email" TEXT NOT NULL,
    "hash" TEXT NOT NULL,
    "firstName" TEXT,
    "lastName" TEXT,

    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Hardware" (
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
    "zustandUser" TEXT,
    "pruefungsDatum" TIMESTAMP(3),

    CONSTRAINT "Hardware_pkey" PRIMARY KEY ("id")
);
