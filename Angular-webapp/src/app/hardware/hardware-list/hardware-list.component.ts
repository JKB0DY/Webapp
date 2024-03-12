import {Component, OnInit, Input} from '@angular/core';
import {CommonModule} from '@angular/common';
import {HardwareList} from '../hardware';

@Component({
	selector: 'app-hardware-list',
	standalone: true,
	imports: [CommonModule],
	templateUrl: './hardware-list.component.html',
	styleUrl: './hardware-list.component.scss',
})
export class HardwareListComponent implements OnInit {
	@Input() hardwareList: HardwareList[] = [];

	constructor() {}

	ngOnInit(): void {}
}
