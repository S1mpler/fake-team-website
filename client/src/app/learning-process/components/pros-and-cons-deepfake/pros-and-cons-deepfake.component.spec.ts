import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProsAndConsDeepfakeComponent } from './pros-and-cons-deepfake.component';

describe('ProsAndConsDeepfakeComponent', () => {
  let component: ProsAndConsDeepfakeComponent;
  let fixture: ComponentFixture<ProsAndConsDeepfakeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProsAndConsDeepfakeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProsAndConsDeepfakeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
