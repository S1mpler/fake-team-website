import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DeepfakeRegulationComponent } from './deepfake-regulation.component';

describe('DeepfakeRegulationComponent', () => {
  let component: DeepfakeRegulationComponent;
  let fixture: ComponentFixture<DeepfakeRegulationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DeepfakeRegulationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DeepfakeRegulationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
