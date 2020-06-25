import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AnswersCounterComponent } from './answers-counter.component';

describe('AnswersCounterComponent', () => {
  let component: AnswersCounterComponent;
  let fixture: ComponentFixture<AnswersCounterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AnswersCounterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AnswersCounterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
