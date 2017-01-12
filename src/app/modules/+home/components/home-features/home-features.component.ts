import { Component, Input, ElementRef, ViewChild } from '@angular/core';
import { MdDialog } from '@angular/material';

import { HomeFeaturesService } from './home-features.service';
import { HomeFeatureModal } from '../home-feature-modal/home-feature-modal.component';
import { Feature } from '../../services/features';

/**
 * Loads features passed by param
 */
@Component({
  selector: 'home-features',
  templateUrl: './home-features.component.html',
  styleUrls: [ './home-features.component.scss' ],
  providers: [ HomeFeaturesService ]
})

export class HomeFeaturesComponent {

  @Input() elements: Array<Feature> = [];
  @ViewChild('search')
  search: ElementRef;

  constructor(
    public dialog: MdDialog,
    private homeFeatureService: HomeFeaturesService
  ) { }

  /**
   * Opens a material design dialog with some extra information about feature selected.
   */
  openDialog(element) {
    this.homeFeatureService.selectData(element);

    return this.dialog.open(HomeFeatureModal, {
      disableClose: false
    });
  }

}

