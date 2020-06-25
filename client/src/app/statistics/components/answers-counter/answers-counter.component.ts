import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-answers-counter',
  templateUrl: './answers-counter.component.html',
  styleUrls: ['./answers-counter.component.scss'],
})
export class AnswersCounterComponent {
  public single = [
    {
      name: 'What is Deepfake?',
      value: 124,
    },
    {
      name: 'How to spot a Deepfake?',
      value: 88,
    },
    {
      name: 'What are pros and cons of Deepfake?',
      value: 86,
    },
  ];
  view: any[] = [250, 150];

  colorScheme = {
    domain: ['#693185'],
    // , '#E44D25', '#CFC0BB', '#7aa3e5', '#a8385d', '#aae3f5'
  };
  cardColor = '#321b4e';

  onSelect(event) {
    console.log(event);
  }
}
