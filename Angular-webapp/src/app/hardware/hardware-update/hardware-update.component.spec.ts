import {ComponentFixture, TestBed} from '@angular/core/testing';

import {HardwareUpdateComponent} from './hardware-update.component';

describe('HardwareUpdateComponent', () => {
	let component: HardwareUpdateComponent;
	let fixture: ComponentFixture<HardwareUpdateComponent>;

	beforeEach(async () => {
		await TestBed.configureTestingModule({
			imports: [HardwareUpdateComponent],
		}).compileComponents();

		fixture = TestBed.createComponent(HardwareUpdateComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});
