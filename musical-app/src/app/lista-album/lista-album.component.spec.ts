import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaAlbumComponent } from './lista-album.component';

describe('ListaAlbumComponent', () => {
  let component: ListaAlbumComponent;
  let fixture: ComponentFixture<ListaAlbumComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListaAlbumComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListaAlbumComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
