import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-intro',
  templateUrl: './intro.component.html',
  styleUrls: ['./intro.component.scss'],
})
export class IntroComponent implements OnInit {
  constructor(private router: Router) {}

  ngOnInit(): void {}

  public startTutorials(): void {
    this.router.navigate(['tutorials']);
  }
}
