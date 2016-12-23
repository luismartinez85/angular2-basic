import { Component, Input } from '@angular/core';
import { MdDialogRef, MdDialog, MdDialogConfig } from '@angular/material';
import { FsCustomGridCardsService } from '../customGridCards/customGridCards.service';

@Component({
  selector: 'custom-modal',
  templateUrl: './customModal.html',
})
export class CustomModal {

  public modalData;

  constructor(public dialogRef: MdDialogRef<CustomModal>) {
    this.modalData = FsCustomGridCardsService.featuresData;
  }
};
