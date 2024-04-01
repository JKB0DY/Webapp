import {
	Component,
	OnInit,
	Input,
	ChangeDetectionStrategy,
	OnChanges,
	SimpleChanges,
} from '@angular/core';
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
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class VeranstaltungListComponent implements OnInit, OnChanges {
	@Input() veranstaltungList: VeranstaltungList[] = [];

	@Input() title: string = '';

	constructor(private veranstaltungService: VeranstaltungService) {
		this.getVeranstaltung();
	}

	ngOnChanges(changes: SimpleChanges): void {
		if (changes['veranstaltungList']) {
			this.getVeranstaltung();
		}
	}

	ngOnInit(): void {
		this.getVeranstaltung();
	}

	getVeranstaltung() {
		this.veranstaltungList = this.veranstaltungService.getVeranstaltung();
	}
}
