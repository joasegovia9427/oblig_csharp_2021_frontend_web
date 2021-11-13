import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BandaComponent } from './banda.component';

describe('BandaComponent', () => {
  let component: BandaComponent;
  let fixture: ComponentFixture<BandaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BandaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BandaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
