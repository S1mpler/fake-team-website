import { Injectable } from '@angular/core';
import { QuestionAnswerModel } from '../../models/questionnaire.type';
import { LearningMaterialType } from 'src/app/models/learning-material.type';

@Injectable({
  providedIn: 'root',
})
export class QuestionnaireService {
  private result: QuestionAnswerModel[];

  constructor() {
    this.retrieveAnswersFromLocalStorage();
  }

  public getAllAnswers(): QuestionAnswerModel[] {
    return this.result;
  }

  public getQuestionsByTutorial(
    type: LearningMaterialType
  ): QuestionAnswerModel[] {
    return this.questions.filter((qa) => qa.from === type);
  }

  private saveAnswersToLocalStorage(): void {
    localStorage.setItem('answers', JSON.stringify(this.result));
  }

  private retrieveAnswersFromLocalStorage(): void {
    this.result = JSON.parse(localStorage.getItem('answers'));
  }

  private get questions(): QuestionAnswerModel[] {
    return [
      {
        id: 1,
        from: LearningMaterialType.WHAT_IS_DEEPFAKE,
        question: 'Did you know Deepfake technology existed?',
        multiAnswer: false,
        options: [
          {
            option: 'Yes',
            isSelected: false,
          },
          {
            option: 'No',
            isSelected: false,
          },
        ],
      },
      {
        id: 2,
        from: LearningMaterialType.WHAT_IS_DEEPFAKE,
        question: 'Select applications which use AI',
        multiAnswer: true,
        options: [
          {
            option: 'Facebook',
            isSelected: false,
            isCorrect: true,
          },
          {
            option: 'Gmail',
            isSelected: false,
            isCorrect: true,
          },
          {
            option: 'Google Maps',
            isSelected: false,
            isCorrect: true,
          },
          {
            option: 'Instagram',
            isSelected: false,
            isCorrect: true,
          },
          {
            option: 'Snapchat',
            isSelected: false,
            isCorrect: true,
          },
          {
            option: 'Spotify',
            isSelected: false,
            isCorrect: true,
          },
        ],
      },
      {
        id: 1,
        from: LearningMaterialType.HOW_TO_SPOT_DEEPFAKE,
        multiAnswer: false,
        src:
          'https://fake-team-storage.s3.eu-central-1.amazonaws.com/videos/realfakes/1.mp4',
        options: [
          {
            option: 'Real',
            isSelected: false,
            isCorrect: true,
          },
          {
            option: 'Fake',
            isSelected: false,
            isCorrect: false,
          },
        ],
      },
      {
        id: 2,
        from: LearningMaterialType.HOW_TO_SPOT_DEEPFAKE,
        multiAnswer: false,
        src:
          'https://fake-team-storage.s3.eu-central-1.amazonaws.com/videos/realfakes/2.mp4',
        options: [
          {
            option: 'Real',
            isSelected: false,
            isCorrect: false,
          },
          {
            option: 'Fake',
            isSelected: false,
            isCorrect: true,
          },
        ],
      },
      {
        id: 3,
        from: LearningMaterialType.HOW_TO_SPOT_DEEPFAKE,
        multiAnswer: false,
        src:
          'https://fake-team-storage.s3.eu-central-1.amazonaws.com/videos/realfakes/3.mp4',
        options: [
          {
            option: 'Real',
            isSelected: false,
            isCorrect: true,
          },
          {
            option: 'Fake',
            isSelected: false,
            isCorrect: false,
          },
        ],
      },
      {
        id: 4,
        from: LearningMaterialType.HOW_TO_SPOT_DEEPFAKE,
        multiAnswer: false,
        src:
          'https://fake-team-storage.s3.eu-central-1.amazonaws.com/videos/realfakes/4.mp4',
        options: [
          {
            option: 'Real',
            isSelected: false,
            isCorrect: true,
          },
          {
            option: 'Fake',
            isSelected: false,
            isCorrect: false,
          },
        ],
      },
      {
        id: 5,
        from: LearningMaterialType.HOW_TO_SPOT_DEEPFAKE,
        multiAnswer: false,
        src:
          'https://fake-team-storage.s3.eu-central-1.amazonaws.com/videos/realfakes/5.mp4',
        options: [
          {
            option: 'Real',
            isSelected: false,
            isCorrect: false,
          },
          {
            option: 'Fake',
            isSelected: false,
            isCorrect: true,
          },
        ],
      },
      {
        id: 6,
        from: LearningMaterialType.HOW_TO_SPOT_DEEPFAKE,
        multiAnswer: false,
        src:
          'https://fake-team-storage.s3.eu-central-1.amazonaws.com/videos/realfakes/6.mp4',
        options: [
          {
            option: 'Real',
            isSelected: false,
            isCorrect: true,
          },
          {
            option: 'Fake',
            isSelected: false,
            isCorrect: false,
          },
        ],
      },
    ];
  }
}
