import {IsNotEmpty, IsString} from 'class-validator';

export class HardwareDto {
	@IsNotEmpty()
	@IsString()
	modell: string;

	description: string;
	image: string;
	kaufdatum: Date;
	inhaber: string;
	hersteller: string;
	seriennummer: string;
	typ: string;
	zustand: string;
	zustandBeschreibung: string;
	zustandDatum: Date;
	zustandUserID: number;
	pruefungsDatum: Date;
}
