import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WhatIsDeepfakeComponent } from './what-is-deepfake.component';

describe('WhatIsDeepfakeComponent', () => {
  let component: WhatIsDeepfakeComponent;
  let fixture: ComponentFixture<WhatIsDeepfakeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WhatIsDeepfakeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WhatIsDeepfakeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
