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
import {Observable} from 'rxjs';

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

	stream = new Observable((observer) => {
		observer.next('user1');
		observer.next('user2');
		observer.complete();
	});

	@ViewChild(HeaderComponent) headerComponent!: HeaderComponent;

	@ViewChildren(HeaderComponent)
	headerChildrenCompontent!: QueryList<HeaderComponent>;

	constructor(@SkipSelf() private hardwareService: HardwareService) {}

	ngOnInit(): void {
		this.stream.subscribe((data) => console.log(data));

		this.hardwareService.getHardware().subscribe((hardwareList) => {
			this.hardwareList = hardwareList;
		});
	}

	ngAfterViewInit(): void {}

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
			// id: 3,
			modell: 'Lightmaxx',
			image: 'vega.png',
			kaufdatum: new Date('2019-01-16'),
			inhaber: 'Max Mustermann',
			hersteller: 'Vega GmbH',
			seriennummer: '123456789',
			typ: 'Lichtmischpult',
			zustand: 'neuwertig',
			zustandBeschreibung: 'keine Kratzer',
		};
		// this.hardwareList.push(hardware);
		this.hardwareService.addHardware(hardware).subscribe((data) => {
			this.hardwareList = [...this.hardwareList, data];
		});
	}

	updateHardware() {
		const hardware: HardwareList = {
			// id: 3,
			modell: 'Lightmaxx yolo',
			image: 'vega.png',
			kaufdatum: new Date('2019-01-16'),
			inhaber: 'Max Mustermann',
			hersteller: 'Vega GmbH',
			seriennummer: '123456789',
			typ: 'Lichtmischpult',
			zustand: 'neuwertig',
			zustandBeschreibung: 'keine Kratzer',
		};

		if (this.selectedHardware) {
			const index = this.hardwareList.findIndex(
				(item) => item.id === this.selectedHardware.id
			);
			hardware.id = this.selectedHardware.id;
			this.hardwareService.updateHardware(hardware).subscribe((data) => {
				this.hardwareList.splice(index, 1, data);
				this.hardwareList = [...this.hardwareList];
			});
		} else {
			console.log('No hardware selected');
		}
	}

	deleteHardware() {
		if (this.selectedHardware) {
			const selectedId = this.selectedHardware.id || -1;
			this.hardwareService.deleteHardware(selectedId).subscribe(() => {
				this.hardwareList = this.hardwareList.filter(
					(item) => item.id !== selectedId
				);
			});
		} else {
			console.log('No hardware selected');
		}
	}
}
