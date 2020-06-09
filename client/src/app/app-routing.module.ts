import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

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
    // pathMatch: 'full',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
