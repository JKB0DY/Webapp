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

	constructor() {}
	ngOnChanges(changes: SimpleChanges): void {}

	ngOnInit(): void {}
}
