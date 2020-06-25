import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { StatisticsModule } from './statistics/statistics.module';

const routes: Routes = [
  {
    path: '',
    loadChildren: () =>
      import('./intro/intro.module').then((m) => m.IntroModule),
    pathMatch: 'full',
  },
  {
    path: 'tutorials',
    loadChildren: () =>
      import('./learning-process/learning-process.module').then(
        (m) => m.LearningProcessModule
      ),
  },
  {
    path: 'results',
    loadChildren: () =>
      import('./statistics/statistics.module').then((m) => m.StatisticsModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
