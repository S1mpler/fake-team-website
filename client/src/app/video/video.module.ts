import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VideoComponent } from './components/video/video.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [VideoComponent],
  imports: [CommonModule, RouterModule],
  exports: [VideoComponent],
})
export class VideoModule {}
