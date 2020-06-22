import { LearningMaterialType } from './learning-material.type';

export interface QuestionAnswerModel {
  id: number;
  from: LearningMaterialType;
  question?: string;
  src?: string;
  options: AnswerOptionModel[];
  multiAnswer: boolean;
}

export interface AnswerOptionModel {
  option: string;
  isSelected: boolean;
  isCorrect?: boolean;
}
