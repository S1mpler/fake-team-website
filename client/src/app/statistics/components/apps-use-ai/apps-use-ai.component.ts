import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-apps-use-ai',
  templateUrl: './apps-use-ai.component.html',
  styleUrls: ['./apps-use-ai.component.scss'],
})
export class AppsUseAiComponent {
  single = [
    {
      name: 'Facebook',
      value: 32,
    },
    {
      name: 'Gmail',
      value: 5,
    },
    {
      name: 'Google Maps',
      value: 20,
    },
    {
      name: 'Instagram',
      value: 10,
    },
    {
      name: 'Snapchat',
      value: 10,
    },
    {
      name: 'Spotify',
      value: 2,
    },
  ];
  multi: any[];

  view: any[] = [800, 350];

  // options
  showXAxis = true;
  showYAxis = true;
  gradient = false;
  showLegend = true;
  showXAxisLabel = true;
  xAxisLabel = 'Country';
  showYAxisLabel = true;
  yAxisLabel = 'Population';

  colorScheme = {
    domain: ['#232837', '#232837', '#232837', '#232837'],
  };

  onSelect(event) {
    console.log(event);
  }
}
