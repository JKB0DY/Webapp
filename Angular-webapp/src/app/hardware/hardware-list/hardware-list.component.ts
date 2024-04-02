import {Component, OnInit} from '@angular/core';
import {CommonModule} from '@angular/common';
import {HardwareList} from '../hardware';
import {RouterModule} from '@angular/router';
import {HardwareService} from '../services/hardware.service';

@Component({
	selector: 'bltinv-hardware-list',
	standalone: true,
	imports: [CommonModule, RouterModule],
	templateUrl: './hardware-list.component.html',
	styleUrl: './hardware-list.component.scss',
})
export class HardwareListComponent implements OnInit {
	hardwareList: HardwareList[] = [];

	title: string = 'Hardware list';

	constructor(private hardwareService: HardwareService) {}

	ngOnInit(): void {
		this.getHardware();
	}

	getHardware(): void {
		this.hardwareService.getHardware().subscribe((data) => {
			if (data) {
				this.hardwareList = [...data];
			}
		});
	}

	addHardware() {
		// Fast way to add a new hardware for testing purposes only
		const hardware: HardwareList = {
			modell: 'Lightmax',
			image: 'vega.png',
			kaufdatum: new Date('2019-01-16'),
			inhaber: 'Max Mustermann',
			hersteller: 'Vega GmbH',
			seriennummer: '123456789',
			typ: 'Lichtmischpult',
			zustand: 'neuwertig',
			zustandBeschreibung: 'keine Kratzer',
		};
		this.hardwareService.addHardware(hardware).subscribe((data) => {
			if (data) {
				this.getHardware();
			}
		});
	}
}
