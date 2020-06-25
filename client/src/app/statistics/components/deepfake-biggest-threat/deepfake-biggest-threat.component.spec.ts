import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DeepfakeBiggestThreatComponent } from './deepfake-biggest-threat.component';

describe('DeepfakeBiggestThreatComponent', () => {
  let component: DeepfakeBiggestThreatComponent;
  let fixture: ComponentFixture<DeepfakeBiggestThreatComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DeepfakeBiggestThreatComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DeepfakeBiggestThreatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
