import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VotoCancionComponent } from './voto-cancion.component';

describe('VotoCancionComponent', () => {
  let component: VotoCancionComponent;
  let fixture: ComponentFixture<VotoCancionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VotoCancionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VotoCancionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
