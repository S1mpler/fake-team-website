import { Component, OnInit } from '@angular/core';
import {
  LearningMaterialType,
  LearningMaterial,
} from 'src/app/models/learning-material.type';
import { LearningProcessService } from '../../services/learning-process.service';

@Component({
  selector: 'app-what-is-ai',
  templateUrl: './what-is-ai.component.html',
  styleUrls: ['./what-is-ai.component.scss'],
})
export class WhatIsAiComponent implements OnInit {
  private type = null;

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
