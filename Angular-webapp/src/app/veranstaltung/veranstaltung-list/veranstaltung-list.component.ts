import {Component, OnInit} from '@angular/core';
import {CommonModule} from '@angular/common';
import {VeranstaltungList} from '../veranstaltung';
import {RouterModule} from '@angular/router';
import {VeranstaltungService} from '../service/veranstaltung.service';

@Component({
	selector: 'bltinv-veranstaltung-list',
	standalone: true,
	imports: [CommonModule, RouterModule],
	templateUrl: './veranstaltung-list.component.html',
	styleUrl: './veranstaltung-list.component.scss',
})
export class VeranstaltungListComponent implements OnInit {
	title: string = 'Veranstaltung list';
	veranstaltungList: VeranstaltungList[] = [];

	constructor(private veranstaltungService: VeranstaltungService) {}

	ngOnInit(): void {
		this.getVeranstaltung();
	}

	getVeranstaltung() {
		this.veranstaltungService.getVeranstaltung().subscribe((data) => {
			if (data) {
				this.veranstaltungList = [...data];
			}
		});
	}

	addVeranstaltung() {
		// Fast way to add a new Veranstaltung for testing purposes only
		const veranstaltung: VeranstaltungList = {
			name: 'mottowoche',
			beschreibung: 'motto ist 90er jahre',
			aufbauStart: new Date('2021-06-01'),
			startDatum: new Date('2021-06-02'),
			endDatum: new Date('2021-06-03'),
			abbauEnde: new Date('2021-06-04'),
			ort: 'schule',
			veranstalter: 'Joi',
			teilnehmer: 'Q2',
			teilnehmerAnzahl: 100,
		};
		this.veranstaltungService
			.addVeranstaltung(veranstaltung)
			.subscribe((data) => {
				if (data) {
					this.getVeranstaltung();
				}
			});
	}
}
