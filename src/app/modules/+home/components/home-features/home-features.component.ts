import { Component, Input } from '@angular/core';
import { MdDialogRef, MdDialog, MdDialogConfig } from '@angular/material';
import { HomeFeaturesService } from './home-features.service';
import { HomeFeatureModal } from '../home-feature-modal/home-feature-modal.component';

@Component({
  selector: 'home-features',
  templateUrl: './home-features.component.html',
  styleUrls: [ './home-features.component.scss' ]
})

export class HomeFeaturesComponent {

  @Input() elements = [];
  dialogRef: MdDialogRef<HomeFeatureModal>;

  constructor(public dialog: MdDialog) { }

  openDialog(element) {
    HomeFeaturesService.featuresData = element;

    this.dialogRef = this.dialog.open(HomeFeatureModal, {
      disableClose: false
    });

    this.dialogRef.afterClosed().subscribe(result => {
      this.dialogRef = null;
      HomeFeaturesService.featuresData = null;
    });
  }

}

