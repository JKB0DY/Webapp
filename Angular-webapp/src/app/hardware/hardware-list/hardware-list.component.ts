import {
	Component,
	OnInit,
	Input,
	ChangeDetectionStrategy,
	OnChanges,
	SimpleChanges,
} from '@angular/core';
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
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HardwareListComponent implements OnInit, OnChanges {
	hardwareList: HardwareList[] = [];

	title: string = 'Hardware list';

	constructor(private hardwareService: HardwareService) {}

	ngOnChanges(changes: SimpleChanges): void {
		if (changes['hardwareList']) {
			this.hardwareList = this.getHardware();
		}
	}

	ngOnInit(): void {
		this.hardwareList = this.getHardware();
	}

	getHardware(): HardwareList[] {
		return this.hardwareService.getHardware();
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
				this.hardwareList = [...this.hardwareList, data];
			}
		});
	}
}
