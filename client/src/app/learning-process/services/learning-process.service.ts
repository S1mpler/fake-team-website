import { Injectable } from '@angular/core';
import {
  LearningMaterial,
  LearningMaterialType,
} from 'src/app/models/learning-material.type';
import { VideoOptions } from 'src/app/models/video-options.type';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class LearningProcessService {
  private learningMaterials = [
    {
      order: 1,
      type: LearningMaterialType.WHAT_IS_DEEPFAKE,
      title: 'What is Deepfake?',
      uri: '/tutorials/what-is-deepfake',
      videoSrc:
        'https://fake-team-storage.s3.eu-central-1.amazonaws.com/videos/what-is-deepfake.mp4',
    },
    {
      order: 2,
      type: LearningMaterialType.HOW_TO_SPOT_DEEPFAKE,
      title: 'How to spot a Deepfake?',
      uri: '/tutorials/how-to-spot-deepfake',
      videoSrc:
        'https://fake-team-storage.s3.eu-central-1.amazonaws.com/videos/how-to-spot-deepfake.mp4',
    },
    {
      order: 3,
      type: LearningMaterialType.PROS_AND_CONS_DEEPFAKE,
      title: 'What are pros and cons of Deepfake?',
      uri: '/tutorials/pros-and-cons-deepfake',
      videoSrc:
        'https://fake-team-storage.s3.eu-central-1.amazonaws.com/videos/pros-and-cons-of-deepfake.mp4',
    },
  ] as LearningMaterial[];

  public getByType(tutorialType: LearningMaterialType): LearningMaterial {
    return this.learningMaterials.find((lm) => lm.type === tutorialType);
  }

  public getNext(tutorial: LearningMaterial): LearningMaterial {
    return this.learningMaterials.find((lm) => lm.order === tutorial.order + 1);
  }

  public getPrev(tutorial: LearningMaterial): LearningMaterial {
    return this.learningMaterials.find((lm) => lm.order === tutorial.order - 1);
  }

  public getVideoOptions(
    currentTutorial: LearningMaterial
  ): Observable<VideoOptions> {
    return new Observable((observer) => {
      observer.next({
        prevTutorial: this.getPrev(currentTutorial),
        currentTutorial,
        nextTutorial: this.getNext(currentTutorial),
      });
    });
  }
}
