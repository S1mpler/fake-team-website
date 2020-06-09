import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WhatIsAiComponent } from './what-is-ai.component';

describe('WhatIsAiComponent', () => {
  let component: WhatIsAiComponent;
  let fixture: ComponentFixture<WhatIsAiComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WhatIsAiComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WhatIsAiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
