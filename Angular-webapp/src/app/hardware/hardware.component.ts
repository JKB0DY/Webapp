import {Component, OnInit} from '@angular/core';
import {CommonModule} from '@angular/common';
import {Hardware, HardwareList} from './hardware';

@Component({
	selector: 'app-hardware',
	standalone: true,
	imports: [CommonModule],
	templateUrl: './hardware.component.html',
	styleUrl: './hardware.component.scss',
})
export class HardwareComponent implements OnInit {
	hardware = ['vega', 'soundcraft'];
	numberOfLamps = 20;
	hideLamps = false;

	hardware1: Hardware = {
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
	};
	hardware2: Hardware = {
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
	};

	hardwareList: HardwareList[] = [
		{hardware: [this.hardware1, this.hardware2]},
	];

	constructor() {}

	ngOnInit(): void {}

	toggle() {
		this.hideLamps = !this.hideLamps;
	}
}
