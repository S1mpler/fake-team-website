import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HowToSpotDeepfakeComponent } from './how-to-spot-deepfake.component';

describe('HowToSpotDeepfakeComponent', () => {
  let component: HowToSpotDeepfakeComponent;
  let fixture: ComponentFixture<HowToSpotDeepfakeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HowToSpotDeepfakeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HowToSpotDeepfakeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
