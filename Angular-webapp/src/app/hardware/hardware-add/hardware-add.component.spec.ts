import {ComponentFixture, TestBed} from '@angular/core/testing';

import {HardwareAddComponent} from './hardware-add.component';

describe('HardwareAddComponent', () => {
	let component: HardwareAddComponent;
	let fixture: ComponentFixture<HardwareAddComponent>;

	beforeEach(async () => {
		await TestBed.configureTestingModule({
			imports: [HardwareAddComponent],
		}).compileComponents();

		fixture = TestBed.createComponent(HardwareAddComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});
