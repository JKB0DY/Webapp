import {Component, OnInit, Input, Output, EventEmitter} from '@angular/core';
import {CommonModule} from '@angular/common';
import {Hardware, HardwareList} from '../hardware';

@Component({
	selector: 'app-hardware-list',
	standalone: true,
	imports: [CommonModule],
	templateUrl: './hardware-list.component.html',
	styleUrl: './hardware-list.component.scss',
})
export class HardwareListComponent implements OnInit {
	@Input() hardwareList: HardwareList[] = [];

	@Output() selectedHardware = new EventEmitter<HardwareList>();

	constructor() {}

	ngOnInit(): void {}

	selectHardware(hardware: HardwareList) {
		this.selectedHardware.emit(hardware);
	}
}
