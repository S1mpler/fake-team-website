import { Component, OnInit } from '@angular/core';
import {
  LearningMaterialType,
  LearningMaterial,
} from 'src/app/models/learning-material.type';
import { LearningProcessService } from '../../services/learning-process.service';

@Component({
  selector: 'app-deepfake-regulations',
  templateUrl: './deepfake-regulations.component.html',
  styleUrls: ['./deepfake-regulations.component.scss'],
})
export class DeepfakeRegulationsComponent implements OnInit {
  private type = LearningMaterialType.DEEPFAKE_REGULATIONS;

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
