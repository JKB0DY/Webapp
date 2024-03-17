import {Inject, Injectable} from '@angular/core';
import {HardwareList} from '../hardware';
import {APP_SERVICE_CONFIG} from '../../AppConfig/appconfig.service';
import {AppConfig} from '../../AppConfig/appconfig.interface';

@Injectable({
	providedIn: 'root',
})
export class HardwareService {
	hardwareList: HardwareList[] = [
		{
			id: 1,
			modell: 'Vega',
			createdAt: new Date('2019-01-16'),
			updatedAt: new Date('2019-01-16'),
			image: 'vega.png',
			kaufdatum: new Date('2019-01-16'),
			inhaber: 'Max Mustermann',
			hersteller: 'Vega GmbH',
			seriennummer: '123456789',
			typ: 'Lichtmischpult',
			zustand: 'neuwertig',
			zustandBeschreibung: 'keine Kratzer',
		},
		{
			id: 2,
			modell: 'Soundcraft',
			createdAt: new Date('2019-02-16'),
			updatedAt: new Date('2019-02-16'),
			image: 'vega.png',
			kaufdatum: new Date('2019-01-16'),
			inhaber: 'Max Mustermann',
			hersteller: 'soundcraft Gmbh',
			seriennummer: '123456789',
			typ: 'Tonmischpult',
			zustand: 'neuwertig',
			zustandBeschreibung: 'keine Kratzer',
		},
	];
	constructor(@Inject(APP_SERVICE_CONFIG) private config: AppConfig) {
		console.log(this.config.apiEndpoint);
		console.log('HardwareService created');
	}

	getHardware() {
		return this.hardwareList;
	}
}
