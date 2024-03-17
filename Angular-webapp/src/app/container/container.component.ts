import {
	AfterContentInit,
	Component,
	ContentChild,
	Host,
	OnInit,
} from '@angular/core';
import {VeranstaltungComponent} from '../veranstaltung/veranstaltung.component';
import {HardwareService} from '../hardware/services/hardware.service';

@Component({
	selector: 'bltinv-container',
	standalone: true,
	imports: [],
	templateUrl: './container.component.html',
	styleUrl: './container.component.scss',
	providers: [HardwareService],
})
export class ContainerComponent implements OnInit, AfterContentInit {
	@ContentChild(VeranstaltungComponent)
	veranstaltung!: VeranstaltungComponent;

	constructor(@Host() private hardwareService: HardwareService) {}

	ngOnInit(): void {}

	ngAfterContentInit(): void {
		console.log(this.veranstaltung);
	}
}
