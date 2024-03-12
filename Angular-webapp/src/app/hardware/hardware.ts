export interface Hardware {
	amount: number;
	lights: number;
	sound: number;
}

export interface HardwareList {
	id: number;
	modell: string;
	createdAt: Date;
	updatedAt: Date;
	image?: String;
	kaufdatum?: Date;
	inhaber?: String;
	hersteller?: String;
	seriennummer?: String;
	typ?: String;
	zustand?: String;
	zustandBeschreibung?: String;
	zustandDatum?: Date;
	zustandUserID?: number;
	pruefungsDatum?: Date;
}
