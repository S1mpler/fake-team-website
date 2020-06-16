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

  public get isHorizontal(): boolean {
    console.log(
      'isHorizontal',
      this.videoElement.nativeElement.width >=
        this.videoElement.nativeElement.height
    );

    return (
      this.videoElement.nativeElement.width >=
      this.videoElement.nativeElement.height
    );
  }

  public get isVertical(): boolean {
    console.log('width', this.videoElement.nativeElement.width);
    console.log('height', this.videoElement.nativeElement.height);

    console.log(
      'isVertical',
      this.videoElement.nativeElement.width <=
        this.videoElement.nativeElement.height
    );

    return (
      this.videoElement.nativeElement.width <=
      this.videoElement.nativeElement.height
    );
  }
}
