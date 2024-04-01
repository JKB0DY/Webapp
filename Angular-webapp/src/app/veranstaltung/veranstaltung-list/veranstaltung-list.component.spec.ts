import {ComponentFixture, TestBed} from '@angular/core/testing';

import {VeranstaltungListComponent} from './veranstaltung-list.component';

describe('VeranstaltungListComponent', () => {
	let component: VeranstaltungListComponent;
	let fixture: ComponentFixture<VeranstaltungListComponent>;

	beforeEach(async () => {
		await TestBed.configureTestingModule({
			imports: [VeranstaltungListComponent],
		}).compileComponents();

		fixture = TestBed.createComponent(VeranstaltungListComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});
