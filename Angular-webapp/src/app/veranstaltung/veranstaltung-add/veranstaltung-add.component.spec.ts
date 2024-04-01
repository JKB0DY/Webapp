import {ComponentFixture, TestBed} from '@angular/core/testing';

import {VeranstaltungAddComponent} from './veranstaltung-add.component';

describe('VeranstaltungAddComponent', () => {
	let component: VeranstaltungAddComponent;
	let fixture: ComponentFixture<VeranstaltungAddComponent>;

	beforeEach(async () => {
		await TestBed.configureTestingModule({
			imports: [VeranstaltungAddComponent],
		}).compileComponents();

		fixture = TestBed.createComponent(VeranstaltungAddComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});
