import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CancionDetailComponent } from './cancion-detail.component';

describe('CancionDetailComponent', () => {
  let component: CancionDetailComponent;
  let fixture: ComponentFixture<CancionDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CancionDetailComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CancionDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
