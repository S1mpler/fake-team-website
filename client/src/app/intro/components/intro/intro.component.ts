import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-intro',
  templateUrl: './intro.component.html',
  styleUrls: ['./intro.component.scss'],
})
export class IntroComponent implements OnInit {
  @ViewChild('backgroundVideo', { static: true }) backgroundVideo: ElementRef<
    HTMLVideoElement
  >;

  public hideText = false;

  constructor(private router: Router) {}

  ngOnInit(): void {}

  public onStartClicked(): void {
    this.hideText = true;
    this.backgroundVideo.nativeElement.play();
  }

  public redirectToTutorials(): void {
    this.router.navigate(['tutorials']);
  }
}
