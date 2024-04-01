import {IsString, IsDate, IsNumber, IsNotEmpty} from 'class-validator';

export class VeranstaltungDto {
	@IsNotEmpty()
	@IsString()
	name: string;

	@IsString()
	beschreibung: string;

	@IsDate()
	aufbauStart: Date;

	@IsNotEmpty()
	@IsDate()
	startDatum: Date;

	@IsNotEmpty()
	@IsDate()
	endDatum: Date;

	@IsDate()
	abbauEnde: Date;

	@IsString()
	ort: string;

	@IsString()
	veranstalter: string;

	@IsString()
	teilnehmer: string;

	@IsNumber()
	teilnehmerAnzahl: number;

	@IsNumber()
	erstelltVon: number;
}
