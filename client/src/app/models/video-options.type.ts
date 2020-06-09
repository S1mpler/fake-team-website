import { LearningMaterial } from './learning-material.type';

export interface VideoOptions {
  prevTutorial: LearningMaterial;
  currentTutorial: LearningMaterial;
  nextTutorial: LearningMaterial;
}
