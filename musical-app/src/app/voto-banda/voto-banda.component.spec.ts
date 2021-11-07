import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VotoBandaComponent } from './voto-banda.component';

describe('VotoBandaComponent', () => {
  let component: VotoBandaComponent;
  let fixture: ComponentFixture<VotoBandaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VotoBandaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VotoBandaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
