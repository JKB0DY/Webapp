import {ComponentFixture, TestBed} from '@angular/core/testing';

import {VeranstaltungHardwareAddComponent} from './veranstaltung-hardware-add.component';

describe('VeranstaltungHardwareAddComponent', () => {
	let component: VeranstaltungHardwareAddComponent;
	let fixture: ComponentFixture<VeranstaltungHardwareAddComponent>;

	beforeEach(async () => {
		await TestBed.configureTestingModule({
			imports: [VeranstaltungHardwareAddComponent],
		}).compileComponents();

		fixture = TestBed.createComponent(VeranstaltungHardwareAddComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});
