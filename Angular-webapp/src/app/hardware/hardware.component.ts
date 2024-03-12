import {Component, OnInit} from '@angular/core';
import {CommonModule} from '@angular/common';
import {Hardware, HardwareList} from './hardware';
import {HardwareListComponent} from './hardware-list/hardware-list.component';

@Component({
	selector: 'app-hardware',
	standalone: true,
	templateUrl: './hardware.component.html',
	styleUrl: './hardware.component.scss',
	imports: [CommonModule, HardwareListComponent],
})
export class HardwareComponent implements OnInit {
	numberOfLamps = 20;
	hideLamps = false;

	selectedHardware!: HardwareList;

	hardware: Hardware = {
		amount: 20,
		lights: 10,
		sound: 10,
	};

	hardwareList: HardwareList[] = [];

	constructor() {}

	ngOnInit(): void {
		this.hardwareList = [
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
	}

	toggle() {
		this.hideLamps = !this.hideLamps;
	}

	selectHardware(hardware: HardwareList) {
		this.selectedHardware = hardware;
		console.log('Selected hardware: ', hardware);
	}
}
