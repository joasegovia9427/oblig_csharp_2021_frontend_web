import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetalleCantanteComponent } from './detalle-cantante.component';

describe('DetalleCantanteComponent', () => {
  let component: DetalleCantanteComponent;
  let fixture: ComponentFixture<DetalleCantanteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetalleCantanteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DetalleCantanteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
