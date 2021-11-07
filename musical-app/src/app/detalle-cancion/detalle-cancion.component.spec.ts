import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetalleCancionComponent } from './detalle-cancion.component';

describe('DetalleCancionComponent', () => {
  let component: DetalleCancionComponent;
  let fixture: ComponentFixture<DetalleCancionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetalleCancionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DetalleCancionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
