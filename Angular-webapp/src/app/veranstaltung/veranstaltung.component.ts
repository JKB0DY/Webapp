import {Component, OnInit, Self, SkipSelf} from '@angular/core';
import {VeranstaltungListComponent} from './veranstaltung-list/veranstaltung-list.component';
import {VeranstaltungService} from './service/veranstaltung.service';
import {VeranstaltungList} from './veranstaltung';

@Component({
	selector: 'bltinv-veranstaltung',
	standalone: true,
	templateUrl: './veranstaltung.component.html',
	styleUrl: './veranstaltung.component.scss',
	providers: [],
	imports: [VeranstaltungListComponent],
})
export class VeranstaltungComponent implements OnInit {
	title: string = 'Veranstaltung list';
	veranstaltungList: VeranstaltungList[] = [];

	constructor(
		@SkipSelf() private veranstaltungService: VeranstaltungService
	) {}

	ngOnInit(): void {}

	getVeranstaltung() {
		this.veranstaltungList = this.veranstaltungService.getVeranstaltung();
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
					this.veranstaltungList = [...this.veranstaltungList, data];
				}
			});
	}
}
