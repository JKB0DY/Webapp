import {DOCUMENT} from '@angular/common';
import {Directive, ElementRef, Inject, OnInit} from '@angular/core';

@Directive({
	selector: '[bltinvHover]',
	standalone: true,
})
export class HoverDirective implements OnInit {
	color: string = 'red';

	constructor(
		private element: ElementRef,
		@Inject(DOCUMENT) private document: Document
	) {}

	ngOnInit(): void {}
}
