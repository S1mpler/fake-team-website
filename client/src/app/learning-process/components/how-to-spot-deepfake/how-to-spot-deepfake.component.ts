import { Component, OnInit } from '@angular/core';
import {
  LearningMaterialType,
  LearningMaterial,
} from 'src/app/models/learning-material.type';
import { LearningProcessService } from '../../services/learning-process.service';
import {
  QuestionAnswerModel,
  AnswerOptionModel,
} from 'src/app/models/questionnaire.type';
import { QuestionnaireService } from '../../services/questionnaire.service';

@Component({
  selector: 'app-how-to-spot-deepfake',
  templateUrl: './how-to-spot-deepfake.component.html',
  styleUrls: ['./how-to-spot-deepfake.component.scss'],
})
export class HowToSpotDeepfakeComponent implements OnInit {
  private type = LearningMaterialType.HOW_TO_SPOT_DEEPFAKE;

  public tutorial: LearningMaterial;
  public showInteraction = false;
  public showVideoControls = true;

  public checkState = false;

  public questions: QuestionAnswerModel[];

  constructor(
    private learningProcessService: LearningProcessService,
    private questionnaireService: QuestionnaireService
  ) {}

  ngOnInit(): void {
    this.tutorial = this.learningProcessService.getByType(this.type);
    this.questions = this.questionnaireService.getQuestionsByTutorial(
      this.type
    );
  }

  public onVideoEnded(): void {
    this.showVideoControls = false;
  }

  public openTestScreen(): void {
    this.showInteraction = true;
  }

  public getVideoOptions() {
    return this.learningProcessService.getVideoOptions(this.tutorial);
  }

  public selectOption(questionId: number, option: AnswerOptionModel): void {
    if (this.checkState) {
      return;
    }

    this.questions
      .find((q) => q.id === questionId)
      .options.find(
        (o) => o.option === option.option
      ).isSelected = this.questions.find((q) => q.id === questionId).multiAnswer
      ? !this.questions
          .find((q) => q.id === questionId)
          .options.find((o) => o.option === option.option).isSelected
      : true;

    if (!this.questions.find((q) => q.id === questionId).multiAnswer) {
      this.questions
        .find((q) => q.id === questionId)
        .options.forEach((o) => {
          if (o.option !== option.option) {
            o.isSelected = false;
          }
        });
    }
  }

  public submitAnswers(): void {
    this.checkState = true;
  }
}
