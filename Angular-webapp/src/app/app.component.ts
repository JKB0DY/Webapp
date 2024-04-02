import {Component, OnInit} from '@angular/core';
import {CommonModule} from '@angular/common';
import {AppNavComponent} from './app-nav/app-nav.component';

@Component({
	selector: 'bltinv-root',
	standalone: true,
	templateUrl: './app.component.html',
	styleUrl: './app.component.scss',
	imports: [CommonModule, AppNavComponent],
})
export class AppComponent implements OnInit {
	constructor() {}

	ngOnInit(): void {}
}
