import {
  Component,
  Input,
  Output,
  EventEmitter,
  ViewChild,
  ElementRef,
} from '@angular/core';
import { VideoOptions } from 'src/app/models/video-options.type';

@Component({
  selector: 'app-video',
  templateUrl: './video.component.html',
  styleUrls: ['./video.component.scss'],
})
export class VideoComponent {
  @ViewChild('videoElement', { static: true }) videoElement: ElementRef;

  @Input() isActive: boolean;
  @Input() showVideoControls: boolean;
  @Input() options: VideoOptions;

  @Output() testSelected: EventEmitter<void> = new EventEmitter();
  @Output() videoEnded: EventEmitter<void> = new EventEmitter();

  public showOverlay = true;

  public onVideoEnded(): void {
    this.showOverlay = true;
    this.videoEnded.emit(null);
  }

  public onTestSelected(): void {
    this.testSelected.emit();
  }

  public playVideo(): void {
    this.showOverlay = false;
    this.videoElement.nativeElement.play();
  }

  public onPause(): void {
    this.showOverlay = true;
  }

  public onPlaying(): void {
    this.showOverlay = false;
  }

  public get isHorizontal(): boolean {
    return (
      this.videoElement.nativeElement.width >=
      this.videoElement.nativeElement.height
    );
  }

  public get isVertical(): boolean {
    return (
      this.videoElement.nativeElement.width <=
      this.videoElement.nativeElement.height
    );
  }
}
