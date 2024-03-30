import {
	Component,
	ElementRef,
	OnInit,
	Optional,
	ViewChild,
} from '@angular/core';
import {CommonModule} from '@angular/common';
import {HardwareComponent} from './hardware/hardware.component';
import {ContainerComponent} from './container/container.component';
import {VeranstaltungComponent} from './veranstaltung/veranstaltung.component';
import {LoggerService} from './logger.service';
import {RouterModule} from '@angular/router';

@Component({
	selector: 'bltinv-root',
	standalone: true,
	templateUrl: './app.component.html',
	styleUrl: './app.component.scss',
	imports: [
		RouterModule,
		CommonModule,
		HardwareComponent,
		ContainerComponent,
		VeranstaltungComponent,
	],
})
export class AppComponent implements OnInit {
	title = 'Besondere Lernleistung';

	@ViewChild('name', {static: true}) name!: ElementRef;

	constructor(@Optional() private loggerService: LoggerService) {}

	ngOnInit(): void {
		this.loggerService?.log('AppComponent initialized');
		this.name.nativeElement.innerText = 'Besondere Lernleistung';
	}

	// 	@ViewChild('user', {read: ViewContainerRef}) vcr!: ViewContainerRef;

	// 	ngAfterViewInit() {
	// 		const componentRef = this.vcr.createComponent(HardwareComponent);
	// 	}
}
