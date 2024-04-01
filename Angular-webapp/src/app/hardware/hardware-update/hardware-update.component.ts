import {Component, OnInit} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {HardwareList} from '../hardware';
import {CommonModule} from '@angular/common';
import {HardwareService} from '../services/hardware.service';
import {Router} from '@angular/router';
import {NgbAlert} from '@ng-bootstrap/ng-bootstrap';
import {ActivatedRoute} from '@angular/router';
import {map} from 'rxjs';

@Component({
	selector: 'bltinv-hardware-update',
	standalone: true,
	imports: [FormsModule, CommonModule, NgbAlert],
	templateUrl: './hardware-update.component.html',
	styleUrl: './hardware-update.component.scss',
})
export class HardwareUpdateComponent implements OnInit {
	id$ = this.route.paramMap.pipe(
		map((params) => parseInt(params.get('id') || '0'))
	);
	hardware: HardwareList = {modell: ''};
	msg: string = '';

	constructor(
		private hardwareService: HardwareService,
		private route: ActivatedRoute,
		private router: Router
	) {}

	ngOnInit(): void {
		this.id$.subscribe((id) => {
			this.hardwareService.getHardwareById(id).subscribe((hardware) => {
				this.hardware = hardware;
			});
		});
	}

	updateHardware() {
		this.hardwareService.updateHardware(this.hardware).subscribe((data) => {
			if (data.modell === this.hardware.modell) {
				this.router.navigate(['/hardwarelist/' + this.hardware['id']]);
			} else {
				this.msg = 'Fehler beim Ändern';
			}
		});
	}
}
