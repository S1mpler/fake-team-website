import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StatisticsComponent } from './components/statistics/statistics.component';
import { NgxChartsModule } from '@swimlane/ngx-charts';
import { StatisticsRoutingModule } from './statistics-routing.module';
import { AnswersCounterComponent } from './components/answers-counter/answers-counter.component';
import { KnowDeepfakeComponent } from './components/know-deepfake/know-deepfake.component';
import { AppsUseAiComponent } from './components/apps-use-ai/apps-use-ai.component';
import { DeepfakeRegulationComponent } from './components/deepfake-regulation/deepfake-regulation.component';
import { DeepfakeBiggestThreatComponent } from './components/deepfake-biggest-threat/deepfake-biggest-threat.component';
import { AgeGroupsComponent } from './components/age-groups/age-groups.component';
import { EducationLevelsComponent } from './components/education-levels/education-levels.component';

@NgModule({
  declarations: [StatisticsComponent, AnswersCounterComponent, KnowDeepfakeComponent, AppsUseAiComponent, DeepfakeRegulationComponent, DeepfakeBiggestThreatComponent, AgeGroupsComponent, EducationLevelsComponent],
  imports: [CommonModule, NgxChartsModule, StatisticsRoutingModule],
})
export class StatisticsModule {}
