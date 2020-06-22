import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { WhatIsDeepfakeComponent } from './components/what-is-deepfake/what-is-deepfake.component';
import { HowToSpotDeepfakeComponent } from './components/how-to-spot-deepfake/how-to-spot-deepfake.component';
import { ProsAndConsDeepfakeComponent } from './components/pros-and-cons-deepfake/pros-and-cons-deepfake.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'what-is-deepfake',
  },
  {
    path: 'what-is-deepfake',
    component: WhatIsDeepfakeComponent,
  },
  {
    path: 'how-to-spot-deepfake',
    component: HowToSpotDeepfakeComponent,
  },
  {
    path: 'pros-and-cons-deepfake',
    component: ProsAndConsDeepfakeComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LearningProcessRoutingModule {}
