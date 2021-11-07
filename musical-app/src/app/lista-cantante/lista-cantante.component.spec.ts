import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaCantanteComponent } from './lista-cantante.component';

describe('ListaCantanteComponent', () => {
  let component: ListaCantanteComponent;
  let fixture: ComponentFixture<ListaCantanteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListaCantanteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListaCantanteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
