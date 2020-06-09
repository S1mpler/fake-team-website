import { Component, OnInit } from '@angular/core';
import {
  LearningMaterialType,
  LearningMaterial,
} from 'src/app/models/learning-material.type';
import { LearningProcessService } from '../../services/learning-process.service';

@Component({
  selector: 'app-pros-and-cons-deepfake',
  templateUrl: './pros-and-cons-deepfake.component.html',
  styleUrls: ['./pros-and-cons-deepfake.component.scss'],
})
export class ProsAndConsDeepfakeComponent implements OnInit {
  private type = LearningMaterialType.PROS_AND_CONS_DEEPFAKE;

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
