import {ComponentFixture, TestBed} from '@angular/core/testing';

import {VeranstaltungDetailsComponent} from './veranstaltung-details.component';

describe('VeranstaltungDetailsComponent', () => {
	let component: VeranstaltungDetailsComponent;
	let fixture: ComponentFixture<VeranstaltungDetailsComponent>;

	beforeEach(async () => {
		await TestBed.configureTestingModule({
			imports: [VeranstaltungDetailsComponent],
		}).compileComponents();

		fixture = TestBed.createComponent(VeranstaltungDetailsComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});
