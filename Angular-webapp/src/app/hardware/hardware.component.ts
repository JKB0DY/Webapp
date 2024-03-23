import {
	AfterViewChecked,
	AfterViewInit,
	Component,
	OnInit,
	QueryList,
	SkipSelf,
	ViewChild,
	ViewChildren,
} from '@angular/core';
import {CommonModule} from '@angular/common';
import {Hardware, HardwareList} from './hardware';
import {HardwareListComponent} from './hardware-list/hardware-list.component';
import {HeaderComponent} from '../header/header.component';
import {HardwareService} from './services/hardware.service';

@Component({
	selector: 'bltinv-hardware',
	standalone: true,
	templateUrl: './hardware.component.html',
	styleUrl: './hardware.component.scss',
	imports: [CommonModule, HardwareListComponent, HeaderComponent],
})
export class HardwareComponent
	implements OnInit, AfterViewInit, AfterViewChecked
{
	numberOfLamps = 20;
	hideLamps = false;

	selectedHardware!: HardwareList;

	hardware: Hardware = {
		amount: 20,
		lights: 10,
		sound: 10,
	};

	title: string = 'Hardware list';

	hardwareList: HardwareList[] = [];

	@ViewChild(HeaderComponent) headerComponent!: HeaderComponent;

	@ViewChildren(HeaderComponent)
	headerChildrenCompontent!: QueryList<HeaderComponent>;

	constructor(@SkipSelf() private hardwareService: HardwareService) {}

	ngOnInit(): void {
		this.hardwareService.getHardware().subscribe((hardwareList) => {
			this.hardwareList = hardwareList;
		});
	}

	ngAfterViewInit(): void {
		this.headerComponent.title = 'Hardware view';

		this.headerChildrenCompontent.forEach((headerComponent) => {
			headerComponent.title = '1';
		});
		this.headerChildrenCompontent.last.title = 'last title';
	}

	ngAfterViewChecked(): void {}

	toggle() {
		this.hideLamps = !this.hideLamps;
		this.title = 'Hardware';
	}

	selectHardware(hardware: HardwareList) {
		this.selectedHardware = hardware;
		console.log('Selected hardware: ', hardware);
	}

	addHardware() {
		const hardware: HardwareList = {
			id: 3,
			modell: 'Lightmaxx',
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
		this.hardwareList = [...this.hardwareList, hardware];
	}
}
