import {Component, OnInit, Self} from '@angular/core';
import {HardwareService} from '../hardware/services/hardware.service';

@Component({
	selector: 'bltinv-veranstaltung',
	standalone: true,
	imports: [],
	templateUrl: './veranstaltung.component.html',
	styleUrl: './veranstaltung.component.scss',
	providers: [HardwareService],
})
export class VeranstaltungComponent implements OnInit {
	veranstaltungsname: string = 'Veranstaltung';

	constructor(@Self() private hardwareService: HardwareService) {}

	ngOnInit(): void {}
}
