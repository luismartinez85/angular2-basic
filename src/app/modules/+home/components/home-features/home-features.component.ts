import { Component, Input } from '@angular/core';
import { MdDialog } from '@angular/material';
import { HomeFeaturesService } from './home-features.service';
import { HomeFeatureModal } from '../home-feature-modal/home-feature-modal.component';

@Component({
  selector: 'home-features',
  templateUrl: './home-features.component.html',
  styleUrls: [ './home-features.component.scss' ],
  providers: [ HomeFeaturesService ]
})

export class HomeFeaturesComponent {

  @Input() elements = [];

  constructor(
    public dialog: MdDialog,
    private homeFeatureService: HomeFeaturesService
  ) { }

  openDialog(element) {
    this.homeFeatureService.selectData(element);

    return this.dialog.open(HomeFeatureModal, {
      disableClose: false
    });
  }

}

