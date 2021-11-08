import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetalleBandaComponent } from './detalle-banda.component';

describe('DetalleBandaComponent', () => {
  let component: DetalleBandaComponent;
  let fixture: ComponentFixture<DetalleBandaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetalleBandaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DetalleBandaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
