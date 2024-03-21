import {IsNotEmpty, IsString, IsDate, IsNumber, IsUrl} from 'class-validator';

export class HardwareDto {
	@IsNotEmpty()
	@IsString()
	modell: string;

	@IsString()
	description: string;

	@IsUrl()
	image: string;

	@IsDate()
	kaufdatum: Date;

	@IsString()
	inhaber: string;

	@IsString()
	hersteller: string;

	@IsString()
	seriennummer: string;

	@IsString()
	typ: string;

	@IsString()
	zustand: string;

	@IsString()
	zustandBeschreibung: string;

	@IsDate()
	zustandDatum: Date;

	@IsNumber()
	zustandUserID: number;

	@IsDate()
	pruefungsDatum: Date;
}
