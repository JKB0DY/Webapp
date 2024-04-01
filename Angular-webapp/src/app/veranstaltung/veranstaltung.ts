export interface VeranstaltungList {
	id?: number;
	createdAt?: Date;
	updatedAt?: Date;

	name?: string;
	beschreibung?: string;
	aufbauStart?: Date;
	startDatum?: Date;
	endDatum?: Date;
	abbauEnde?: Date;
	ort?: string;
	veranstalter?: string;
	teilnehmer?: string;
	teilnehmerAnzahl?: number;
	erstelltVon?: number;
}
