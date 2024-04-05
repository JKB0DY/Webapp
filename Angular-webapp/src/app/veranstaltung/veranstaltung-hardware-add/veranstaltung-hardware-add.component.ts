import {Component, OnInit} from '@angular/core';
import {map} from 'rxjs';
import {CommonModule} from '@angular/common';
import {ActivatedRoute, Router, RouterModule} from '@angular/router';
import {VeranstaltungService} from '../service/veranstaltung.service';
import {HardwareList} from '../../hardware/hardware';
import {HardwareService} from '../../hardware/services/hardware.service';

@Component({
	selector: 'bltinv-veranstaltung-hardware-add',
	standalone: true,
	imports: [CommonModule, RouterModule],
	templateUrl: './veranstaltung-hardware-add.component.html',
	styleUrl: './veranstaltung-hardware-add.component.scss',
})
export class VeranstaltungHardwareAddComponent implements OnInit {
	id$ = this.route.paramMap.pipe(
		map((params) => parseInt(params.get('id') || '0'))
	);
	id: number = 0;
	hardwareList: HardwareList[] = [];

	constructor(
		private veranstaltungService: VeranstaltungService,
		private hardwareService: HardwareService,
		private router: Router,
		private route: ActivatedRoute
	) {}

	ngOnInit(): void {
		this.id$.subscribe((id) => {
			this.id = id;
		});
		this.getHardware();
	}

	addHardwaretoVeranstaltung(idhardware: number | undefined): void {
		if (idhardware === undefined) {
			return;
		}
		this.veranstaltungService
			.addHardwareToVeranstaltung(this.id, idhardware)
			.subscribe((data) => {
				console.log(data);
				if (data === null) {
					alert(
						'Error adding hardware to Veranstaltung. Hardware maybe already added.'
					);
				}
				this.router.navigate(['/veranstaltunglist', this.id]);
			});
	}

	getHardware(): void {
		this.hardwareService.getHardware().subscribe((data) => {
			if (data) {
				this.hardwareList = [...data];
			}
		});
	}
}
