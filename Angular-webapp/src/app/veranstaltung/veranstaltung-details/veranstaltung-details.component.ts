import {CommonModule} from '@angular/common';
import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router, RouterModule} from '@angular/router';
import {map} from 'rxjs';
import {VeranstaltungList} from '../veranstaltung';
import {VeranstaltungService} from '../service/veranstaltung.service';

@Component({
	selector: 'bltinv-veranstaltung-details',
	standalone: true,
	imports: [CommonModule, RouterModule],
	templateUrl: './veranstaltung-details.component.html',
	styleUrl: './veranstaltung-details.component.scss',
})
export class VeranstaltungDetailsComponent implements OnInit {
	id$ = this.route.paramMap.pipe(
		map((params) => parseInt(params.get('id') || '0'))
	);
	veranstaltung: VeranstaltungList = {};

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
