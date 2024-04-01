import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VeranstaltungUpdateComponent } from './veranstaltung-update.component';

describe('VeranstaltungUpdateComponent', () => {
  let component: VeranstaltungUpdateComponent;
  let fixture: ComponentFixture<VeranstaltungUpdateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [VeranstaltungUpdateComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(VeranstaltungUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
