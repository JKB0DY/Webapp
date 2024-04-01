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
	@Input() hardwareList: HardwareList[] = [];

	@Input() title: string = '';

	constructor(private hardwareService: HardwareService) {
		this.getHardware();
	}
	ngOnChanges(changes: SimpleChanges): void {
		if (changes['hardwareList']) {
			this.getHardware();
		}
	}

	ngOnInit(): void {
		this.getHardware();
	}

	getHardware() {
		this.hardwareList = this.hardwareService.getHardware();
	}
}
