import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BandaDetailComponent } from './banda-detail.component';

describe('BandaDetailComponent', () => {
  let component: BandaDetailComponent;
  let fixture: ComponentFixture<BandaDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BandaDetailComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BandaDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
