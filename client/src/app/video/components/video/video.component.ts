import { Component, Input, Output, EventEmitter } from '@angular/core';
import { VideoOptions } from 'src/app/models/video-options.type';

@Component({
  selector: 'app-video',
  templateUrl: './video.component.html',
  styleUrls: ['./video.component.scss'],
})
export class VideoComponent {
  @Input() showVideoControls: boolean;
  @Input() options: VideoOptions;

  public showOverlay = false;

  @Output() testSelected: EventEmitter<void> = new EventEmitter();
  @Output() videoEnded: EventEmitter<void> = new EventEmitter();

  public onVideoEnded(): void {
    this.showOverlay = true;
    this.videoEnded.emit(null);
  }

  public onTestSelected(): void {
    this.testSelected.emit();
  }
}
