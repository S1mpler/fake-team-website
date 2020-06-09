import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DeepfakeRegulationsComponent } from './deepfake-regulations.component';

describe('DeepfakeRegulationsComponent', () => {
  let component: DeepfakeRegulationsComponent;
  let fixture: ComponentFixture<DeepfakeRegulationsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DeepfakeRegulationsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DeepfakeRegulationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
