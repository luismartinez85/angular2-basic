import { Component, Input } from '@angular/core';
import { MdDialogRef, MdDialog, MdDialogConfig } from '@angular/material';
import { HomeFeaturesService } from '../home-features/home-features.service';

@Component({
  selector: 'home-feature-modal',
  templateUrl: './home-feature-modal.html',
  styleUrls: [ './home-feature-modal.component.scss' ]
})

export class HomeFeatureModal {

  public modalData;

  constructor(public dialogRef: MdDialogRef<HomeFeatureModal>) {
    this.modalData = HomeFeaturesService.featuresData;
  }
};
