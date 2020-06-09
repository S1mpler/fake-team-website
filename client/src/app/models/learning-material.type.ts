export interface LearningMaterial {
  order: number;
  type: LearningMaterialType;
  title: string;
  uri: string;
  videoSrc: string;
}

export enum LearningMaterialType {
  WHAT_IS_AI = 1,
  WHAT_IS_DEEPFAKE = 2,
  HOW_TO_STOP_DEEPFAKE = 3,
  PROS_AND_CONS_DEEPFAKE = 4,
  DEEPFAKE_REGULATIONS = 5,
}
