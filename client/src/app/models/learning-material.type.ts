export interface LearningMaterial {
  order: number;
  type: LearningMaterialType;
  title: string;
  uri: string;
  videoSrc: string;
}

export enum LearningMaterialType {
  WHAT_IS_DEEPFAKE = 1,
  HOW_TO_SPOT_DEEPFAKE = 2,
  PROS_AND_CONS_DEEPFAKE = 3,
  DEEPFAKE_REGULATIONS = 4,
}
