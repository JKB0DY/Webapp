import {
	AfterViewInit,
	Component,
	ViewChild,
	ViewContainerRef,
} from '@angular/core';
import {CommonModule} from '@angular/common';
import {HardwareComponent} from './hardware/hardware.component';

@Component({
	selector: 'bltinv-root',
	standalone: true,
	templateUrl: './app.component.html',
	styleUrl: './app.component.scss',
	imports: [CommonModule, HardwareComponent],
})
export class AppComponent implements AfterViewInit {
	title = 'Besondere Lernleistung';

	@ViewChild('user', {read: ViewContainerRef}) vcr!: ViewContainerRef;

	ngAfterViewInit() {
		const componentRef = this.vcr.createComponent(HardwareComponent);
	}
}
