import {
	AfterViewInit,
	Component,
	ElementRef,
	OnInit,
	ViewChild,
	ViewContainerRef,
} from '@angular/core';
import {CommonModule} from '@angular/common';
import {HardwareComponent} from './hardware/hardware.component';
import {ContainerComponent} from './container/container.component';
import {VeranstaltungComponent} from './veranstaltung/veranstaltung.component';

@Component({
	selector: 'bltinv-root',
	standalone: true,
	templateUrl: './app.component.html',
	styleUrl: './app.component.scss',
	imports: [
		CommonModule,
		HardwareComponent,
		ContainerComponent,
		VeranstaltungComponent,
	],
})
export class AppComponent implements OnInit {
	title = 'Besondere Lernleistung';

	@ViewChild('name', {static: true}) name!: ElementRef;
	ngOnInit(): void {
		this.name.nativeElement.innerText = 'Besondere Lernleistung';
	}

	// 	@ViewChild('user', {read: ViewContainerRef}) vcr!: ViewContainerRef;

	// 	ngAfterViewInit() {
	// 		const componentRef = this.vcr.createComponent(HardwareComponent);
	// 	}
}
