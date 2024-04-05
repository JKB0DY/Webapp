import {Component, OnInit} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {VeranstaltungList} from '../veranstaltung';
import {CommonModule} from '@angular/common';
import {Router} from '@angular/router';
import {NgbAlert} from '@ng-bootstrap/ng-bootstrap';
import {VeranstaltungService} from '../service/veranstaltung.service';

@Component({
	selector: 'bltinv-veranstaltung-add',
	standalone: true,
	imports: [CommonModule, NgbAlert, FormsModule],
	templateUrl: './veranstaltung-add.component.html',
	styleUrl: './veranstaltung-add.component.scss',
})
export class VeranstaltungAddComponent implements OnInit {
	veranstaltung: VeranstaltungList = {
		name: '',
		createdAt: new Date(),
		updatedAt: new Date(),
		beschreibung: '',
		ort: '',
		veranstalter: '',
		teilnehmer: '',
		aufbauStart: new Date(),
		startDatum: new Date(),
		endDatum: new Date(),
		abbauEnde: new Date(),
	};

	msg: string = '';

	constructor(
		private veranstaltungService: VeranstaltungService,
		private router: Router
	) {}
	ngOnInit(): void {}

	addVeranstaltung() {
		this.veranstaltungService
			.addVeranstaltung(this.veranstaltung)
			.subscribe((data) => {
				if (data.name === this.veranstaltung.name) {
					this.router.navigate(['/hardwarelist']);
				} else {
					this.msg = 'Fehler beim Hinzufügen';
				}
			});
	}
}
