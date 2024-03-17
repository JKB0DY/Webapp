import {AfterContentInit, Component, ContentChild, OnInit} from '@angular/core';
import {VeranstaltungComponent} from '../veranstaltung/veranstaltung.component';

@Component({
	selector: 'bltinv-container',
	standalone: true,
	imports: [],
	templateUrl: './container.component.html',
	styleUrl: './container.component.scss',
})
export class ContainerComponent implements OnInit, AfterContentInit {
	@ContentChild(VeranstaltungComponent)
	veranstaltung!: VeranstaltungComponent;

	constructor() {}

	ngOnInit(): void {}

	ngAfterContentInit(): void {
		console.log(this.veranstaltung);
	}
}
