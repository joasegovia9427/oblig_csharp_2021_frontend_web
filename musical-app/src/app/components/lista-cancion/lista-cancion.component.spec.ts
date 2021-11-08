import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaCancionComponent } from './lista-cancion.component';

describe('ListaCancionComponent', () => {
  let component: ListaCancionComponent;
  let fixture: ComponentFixture<ListaCancionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListaCancionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListaCancionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
