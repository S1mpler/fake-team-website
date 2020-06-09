import { Component, OnInit } from '@angular/core';
import {
  LearningMaterialType,
  LearningMaterial,
} from 'src/app/models/learning-material.type';
import { LearningProcessService } from '../../services/learning-process.service';

@Component({
  selector: 'app-how-to-spot-deepfake',
  templateUrl: './how-to-spot-deepfake.component.html',
  styleUrls: ['./how-to-spot-deepfake.component.scss'],
})
export class HowToSpotDeepfakeComponent implements OnInit {
  private type = LearningMaterialType.HOW_TO_STOP_DEEPFAKE;

  public tutorial: LearningMaterial;
  public showInteraction = false;
  public showVideoControls = true;

  constructor(private learningProcessService: LearningProcessService) {}

  ngOnInit(): void {
    this.tutorial = this.learningProcessService.getByType(this.type);
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
}
