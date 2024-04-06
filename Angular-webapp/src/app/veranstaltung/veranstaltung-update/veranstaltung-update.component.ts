import {Component, OnInit} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {VeranstaltungList} from '../veranstaltung';
import {CommonModule} from '@angular/common';
import {Router} from '@angular/router';
import {NgbAlert} from '@ng-bootstrap/ng-bootstrap';
import {ActivatedRoute} from '@angular/router';
import {map} from 'rxjs';
import {VeranstaltungService} from '../service/veranstaltung.service';

@Component({
	selector: 'bltinv-veranstaltung-update',
	standalone: true,
	imports: [FormsModule, CommonModule, NgbAlert],
	templateUrl: './veranstaltung-update.component.html',
	styleUrl: './veranstaltung-update.component.scss',
})
export class VeranstaltungUpdateComponent implements OnInit {
	id$ = this.route.paramMap.pipe(
		map((params) => parseInt(params.get('id') || '0'))
	);
	veranstaltung: VeranstaltungList = {};
	msg: string = '';

	constructor(
		private veranstaltungService: VeranstaltungService,
		private route: ActivatedRoute,
		private router: Router
	) {}

	ngOnInit(): void {
		this.id$.subscribe((id) => {
			this.veranstaltungService
				.getVeranstaltungById(id)
				.subscribe((veranstaltung) => {
					this.veranstaltung = veranstaltung;
				});
		});
	}

	updateVeranstaltung() {
		this.veranstaltungService
			.updateVeranstaltung(this.veranstaltung)
			.subscribe((data) => {
				if (data.name === this.veranstaltung.name) {
					this.router.navigate([
						'/veranstaltunglist/' + this.veranstaltung['id'],
					]);
				} else {
					this.msg = 'Fehler beim Ändern';
				}
			});
	}
}
