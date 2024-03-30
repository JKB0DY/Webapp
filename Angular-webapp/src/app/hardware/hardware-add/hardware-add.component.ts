import {Component, OnInit} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {HardwareList} from '../hardware';
import {CommonModule} from '@angular/common';
import {HardwareService} from '../services/hardware.service';
import {Router} from '@angular/router';

@Component({
	selector: 'bltinv-hardware-add',
	standalone: true,
	imports: [FormsModule, CommonModule],
	templateUrl: './hardware-add.component.html',
	styleUrl: './hardware-add.component.scss',
})
export class HardwareAddComponent implements OnInit {
	hardware: HardwareList = {
		modell: '',
		createdAt: new Date(),
		updatedAt: new Date(),
		image: '',
		kaufdatum: new Date(),
		inhaber: '',
		hersteller: '',
		seriennummer: '',
		typ: '',
		zustand: '',
		zustandBeschreibung: '',
		zustandDatum: new Date(),
		pruefungsDatum: new Date(),
	};

	msg: string = '';

	constructor(
		private hardwareService: HardwareService,
		private router: Router
	) {}
	ngOnInit(): void {}

	addHardware() {
		if (this.hardware.image === '') {
			this.hardware.image = undefined;
		}
		this.hardwareService.addHardware(this.hardware).subscribe((data) => {
			if (data.modell === this.hardware.modell) {
				this.router.navigate(['/hardwarelist']);
			} else {
				this.msg = 'Fehler beim Hinzufügen';
			}
		});
	}
}
