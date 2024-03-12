import {Component} from '@angular/core';
import {CommonModule} from '@angular/common';
import {HardwareComponent} from './hardware/hardware.component';

@Component({
	selector: 'app-root',
	standalone: true,
	templateUrl: './app.component.html',
	styleUrl: './app.component.scss',
	imports: [CommonModule, HardwareComponent],
})
export class AppComponent {
	title = 'Besondere Lernleistung';

	role = 'Admin';
}
