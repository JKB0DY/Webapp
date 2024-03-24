import {Component, OnInit} from '@angular/core';

@Component({
	selector: 'bltinv-header',
	standalone: true,
	imports: [],
	templateUrl: './header.component.html',
	styleUrl: './header.component.scss',
})
export class HeaderComponent implements OnInit {
	title: string = 'Hardware view';

	constructor() {}

	ngOnInit(): void {}
}
