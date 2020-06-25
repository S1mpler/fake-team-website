import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AppsUseAiComponent } from './apps-use-ai.component';

describe('AppsUseAiComponent', () => {
  let component: AppsUseAiComponent;
  let fixture: ComponentFixture<AppsUseAiComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AppsUseAiComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppsUseAiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
