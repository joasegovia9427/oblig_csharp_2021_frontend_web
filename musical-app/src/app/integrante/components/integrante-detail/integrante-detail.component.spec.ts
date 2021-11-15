import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IntegranteDetailComponent } from './integrante-detail.component';

describe('IntegranteDetailComponent', () => {
  let component: IntegranteDetailComponent;
  let fixture: ComponentFixture<IntegranteDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IntegranteDetailComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IntegranteDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
