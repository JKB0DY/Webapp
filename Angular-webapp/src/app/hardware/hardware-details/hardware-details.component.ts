import {CommonModule} from '@angular/common';
import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router, RouterModule} from '@angular/router';
import {map} from 'rxjs';
import {HardwareService} from '../services/hardware.service';
import {HardwareList} from '../hardware';

@Component({
	selector: 'bltinv-hardware-details',
	standalone: true,
	imports: [CommonModule, RouterModule],
	templateUrl: './hardware-details.component.html',
	styleUrl: './hardware-details.component.scss',
})
export class HardwareDetailsComponent implements OnInit {
	id$ = this.route.paramMap.pipe(
		map((params) => parseInt(params.get('id') || '0'))
	);
	hardware: HardwareList = {modell: ''};

	constructor(
		private route: ActivatedRoute,
		private router: Router,
		private hardwareService: HardwareService
	) {}

	ngOnInit(): void {
		this.id$.subscribe((id) => {
			this.hardwareService.getHardwareById(id).subscribe((hardware) => {
				this.hardware = hardware;
				this.hardware.id = id;
			});
		});
	}

	deleteHardware() {
		this.id$.subscribe((id) => {
			this.hardwareService.deleteHardware(id).subscribe(() => {
				console.log('Hardware deleted');
				this.router.navigate(['/hardwarelist']);
			});
		});
	}
}
