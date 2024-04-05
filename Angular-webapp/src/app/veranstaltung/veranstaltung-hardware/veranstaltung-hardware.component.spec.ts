import {ComponentFixture, TestBed} from '@angular/core/testing';

import {VeranstaltungHardwareComponent} from './veranstaltung-hardware.component';

describe('VeranstaltungHardwareComponent', () => {
	let component: VeranstaltungHardwareComponent;
	let fixture: ComponentFixture<VeranstaltungHardwareComponent>;

	beforeEach(async () => {
		await TestBed.configureTestingModule({
			imports: [VeranstaltungHardwareComponent],
		}).compileComponents();

		fixture = TestBed.createComponent(VeranstaltungHardwareComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});
