import { Component } from '@angular/core';
import { HomeFeaturesService } from '../home-features/home-features.service';

@Component({
  selector: 'home-feature-modal',
  templateUrl: './home-feature-modal.component.html',
  styleUrls: [ './home-feature-modal.component.scss' ]
})

export class HomeFeatureModal {

  public modalData;

  constructor() {
    this.modalData = HomeFeaturesService.featuresData;
  }
};
