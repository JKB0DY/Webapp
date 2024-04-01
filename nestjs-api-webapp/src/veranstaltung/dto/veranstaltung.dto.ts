import {IsString, IsDate, IsNumber, IsArray, IsNotEmpty} from 'class-validator';
import {HardwareDto} from 'src/hardware/dto';

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

	@IsArray()
	veranstaltungHardware: Array<HardwareDto>;
}
