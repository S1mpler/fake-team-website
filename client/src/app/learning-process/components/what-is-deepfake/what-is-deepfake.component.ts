import { Component, OnInit } from '@angular/core';
import { LearningProcessService } from '../../services/learning-process.service';
import {
  LearningMaterialType,
  LearningMaterial,
} from 'src/app/models/learning-material.type';

@Component({
  selector: 'app-what-is-deepfake',
  templateUrl: './what-is-deepfake.component.html',
  styleUrls: ['./what-is-deepfake.component.scss'],
})
export class WhatIsDeepfakeComponent implements OnInit {
  private type = LearningMaterialType.WHAT_IS_DEEPFAKE;

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
