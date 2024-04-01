-- CreateTable
CREATE TABLE "veranstaltungen" (
    "id" SERIAL NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "name" TEXT NOT NULL,
    "beschreibung" TEXT,
    "aufbauStart" TIMESTAMP(3),
    "startDatum" TIMESTAMP(3) NOT NULL,
    "endDatum" TIMESTAMP(3) NOT NULL,
    "abbauEnde" TIMESTAMP(3),
    "ort" TEXT,
    "veranstalter" TEXT,
    "teilnehmer" TEXT,
    "erstelltVon" INTEGER,

    CONSTRAINT "veranstaltungen_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "veranstaltung_hardware" (
    "veranstaltungID" INTEGER NOT NULL,
    "hardwareID" INTEGER NOT NULL,

    CONSTRAINT "veranstaltung_hardware_pkey" PRIMARY KEY ("veranstaltungID","hardwareID")
);

-- AddForeignKey
ALTER TABLE "veranstaltungen" ADD CONSTRAINT "veranstaltungen_erstelltVon_fkey" FOREIGN KEY ("erstelltVon") REFERENCES "users"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "veranstaltung_hardware" ADD CONSTRAINT "veranstaltung_hardware_veranstaltungID_fkey" FOREIGN KEY ("veranstaltungID") REFERENCES "veranstaltungen"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "veranstaltung_hardware" ADD CONSTRAINT "veranstaltung_hardware_hardwareID_fkey" FOREIGN KEY ("hardwareID") REFERENCES "hardware"("id") ON DELETE CASCADE ON UPDATE CASCADE;
