import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LearningProcessRoutingModule } from './learning-process-routing.module';
import { VideoModule } from '../video/video.module';
import { WhatIsAiComponent } from './components/what-is-ai/what-is-ai.component';
import { WhatIsDeepfakeComponent } from './components/what-is-deepfake/what-is-deepfake.component';
import { HowToSpotDeepfakeComponent } from './components/how-to-spot-deepfake/how-to-spot-deepfake.component';
import { ProsAndConsDeepfakeComponent } from './components/pros-and-cons-deepfake/pros-and-cons-deepfake.component';
import { DeepfakeRegulationsComponent } from './components/deepfake-regulations/deepfake-regulations.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [
    WhatIsAiComponent,
    WhatIsDeepfakeComponent,
    HowToSpotDeepfakeComponent,
    ProsAndConsDeepfakeComponent,
    DeepfakeRegulationsComponent,
  ],
  imports: [
    CommonModule,
    SharedModule,
    VideoModule,
    LearningProcessRoutingModule,
  ],
})
export class LearningProcessModule {}
