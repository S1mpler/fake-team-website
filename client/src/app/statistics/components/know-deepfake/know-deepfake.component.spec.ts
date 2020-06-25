import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KnowDeepfakeComponent } from './know-deepfake.component';

describe('KnowDeepfakeComponent', () => {
  let component: KnowDeepfakeComponent;
  let fixture: ComponentFixture<KnowDeepfakeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KnowDeepfakeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KnowDeepfakeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
