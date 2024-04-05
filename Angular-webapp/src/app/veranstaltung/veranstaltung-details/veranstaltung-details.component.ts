import {CommonModule} from '@angular/common';
import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router, RouterModule} from '@angular/router';
import {map} from 'rxjs';
import {VeranstaltungList} from '../veranstaltung';
import {VeranstaltungService} from '../service/veranstaltung.service';
import {HardwareList} from '../../hardware/hardware';
import {VeranstaltungHardwareComponent} from '../veranstaltung-hardware/veranstaltung-hardware.component';

@Component({
	selector: 'bltinv-veranstaltung-details',
	standalone: true,
	templateUrl: './veranstaltung-details.component.html',
	styleUrl: './veranstaltung-details.component.scss',
	imports: [CommonModule, RouterModule, VeranstaltungHardwareComponent],
})
export class VeranstaltungDetailsComponent implements OnInit {
	id$ = this.route.paramMap.pipe(
		map((params) => parseInt(params.get('id') || '0'))
	);
	id: number = 0;
	veranstaltung: VeranstaltungList = {};
	usedHardware: HardwareList[] = [];

	constructor(
		private route: ActivatedRoute,
		private router: Router,
		private veranstaltungService: VeranstaltungService
	) {}

	ngOnInit(): void {
		this.id$.subscribe((id) => {
			this.veranstaltungService
				.getVeranstaltungById(id)
				.subscribe((veranstaltung) => {
					this.veranstaltung = veranstaltung;
					this.veranstaltung.id = id;
				});
			this.veranstaltungService
				.getHardwareByVeranstaltung(id)
				.subscribe((hardware) => {
					this.usedHardware = hardware;
				});
			this.id = id;
		});
	}

	deleteVeranstaltung() {
		this.id$.subscribe((id) => {
			this.veranstaltungService.deleteVeranstaltung(id).subscribe(() => {
				console.log('veranstaltung deleted');
				this.router.navigate(['/veranstaltunglist']);
			});
		});
	}
}
