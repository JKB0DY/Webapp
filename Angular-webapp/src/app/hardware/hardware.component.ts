import {
	AfterViewChecked,
	AfterViewInit,
	Component,
	OnInit,
	SkipSelf,
} from '@angular/core';
import {CommonModule} from '@angular/common';
import {HardwareList} from './hardware';
import {HardwareListComponent} from './hardware-list/hardware-list.component';
import {HardwareService} from './services/hardware.service';

@Component({
	selector: 'bltinv-hardware',
	standalone: true,
	templateUrl: './hardware.component.html',
	styleUrl: './hardware.component.scss',
	imports: [CommonModule, HardwareListComponent],
})
export class HardwareComponent
	implements OnInit, AfterViewInit, AfterViewChecked
{
	title: string = 'Hardware list';

	hardwareList: HardwareList[] = [];

	constructor(@SkipSelf() private hardwareService: HardwareService) {}

	ngOnInit(): void {
		this.getHardware();
	}

	ngAfterViewInit(): void {}

	ngAfterViewChecked(): void {}

	getHardware() {
		this.hardwareList = this.hardwareService.getHardware();
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
