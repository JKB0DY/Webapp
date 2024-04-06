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

	title: string = 'Hardwareliste';

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
}
