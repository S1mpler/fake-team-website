import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LearningProcessRoutingModule } from './learning-process-routing.module';
import { VideoModule } from '../video/video.module';
import { WhatIsDeepfakeComponent } from './components/what-is-deepfake/what-is-deepfake.component';
import { HowToSpotDeepfakeComponent } from './components/how-to-spot-deepfake/how-to-spot-deepfake.component';
import { ProsAndConsDeepfakeComponent } from './components/pros-and-cons-deepfake/pros-and-cons-deepfake.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [
    WhatIsDeepfakeComponent,
    HowToSpotDeepfakeComponent,
    ProsAndConsDeepfakeComponent,
  ],
  imports: [
    CommonModule,
    SharedModule,
    VideoModule,
    LearningProcessRoutingModule,
  ],
})
export class LearningProcessModule {}
