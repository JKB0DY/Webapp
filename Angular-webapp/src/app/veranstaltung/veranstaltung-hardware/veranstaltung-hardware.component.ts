import {Component, Input, OnInit} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule} from '@angular/router';
import {VeranstaltungService} from '../service/veranstaltung.service';
import {HardwareList} from '../../hardware/hardware';

@Component({
	selector: 'bltinv-veranstaltung-hardware',
	standalone: true,
	imports: [CommonModule, RouterModule],
	templateUrl: './veranstaltung-hardware.component.html',
	styleUrl: './veranstaltung-hardware.component.scss',
})
export class VeranstaltungHardwareComponent implements OnInit {
	@Input() idVeranstaltung = 0;

	hardwareList: HardwareList[] = [];
	title: string = 'Der Veranstaltung zugeordnete Hardware:';

	constructor(private veranstaltungService: VeranstaltungService) {}

	ngOnInit(): void {
		this.getHardware();
	}

	getHardware(): void {
		this.veranstaltungService
			.getHardwareByVeranstaltung(this.idVeranstaltung)
			.subscribe((data) => {
				if (data) {
					this.hardwareList = [...data];
				}
			});
	}

	deleteHardwareFromVeranstaltung(idhardware: number | undefined): void {
		if (idhardware === undefined) {
			return;
		}
		this.veranstaltungService
			.deleteHardwareFromVeranstaltung(idhardware, this.idVeranstaltung)
			.subscribe(() => {
				this.getHardware();
			});
	}
}
