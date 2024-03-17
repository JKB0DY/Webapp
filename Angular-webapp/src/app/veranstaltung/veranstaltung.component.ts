import {Component, OnInit} from '@angular/core';

@Component({
	selector: 'bltinv-veranstaltung',
	standalone: true,
	imports: [],
	templateUrl: './veranstaltung.component.html',
	styleUrl: './veranstaltung.component.scss',
})
export class VeranstaltungComponent implements OnInit {
	veranstaltungsname: string = 'Veranstaltung';

	constructor() {}

	ngOnInit(): void {}
}