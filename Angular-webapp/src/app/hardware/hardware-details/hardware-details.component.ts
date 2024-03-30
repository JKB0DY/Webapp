import {CommonModule} from '@angular/common';
import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {Observable, map} from 'rxjs';
import {HardwareService} from '../services/hardware.service';
import {HardwareList} from '../hardware';

@Component({
	selector: 'bltinv-hardware-details',
	standalone: true,
	imports: [CommonModule],
	templateUrl: './hardware-details.component.html',
	styleUrl: './hardware-details.component.scss',
})
export class HardwareDetailsComponent implements OnInit {
	id$ = this.router.paramMap.pipe(
		map((params) => parseInt(params.get('id') || '0'))
	);
	hardware: HardwareList = {modell: ''};

	constructor(
		private router: ActivatedRoute,
		private hardwareService: HardwareService
	) {}

	ngOnInit(): void {
		this.id$.subscribe((id) => {
			this.hardwareService.getHardwareById(id).subscribe((hardware) => {
				this.hardware = hardware;
			});
		});
	}
}
