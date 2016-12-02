import { Component, Input } from '@angular/core';
import { MdDialogRef, MdDialog, MdDialogConfig } from '@angular/material';
import { FsCustomGridCardsService } from './customGridCards.service';

@Component({
  selector: 'pizza-dialog',
  templateUrl: './customDialog.html',
})
export class PizzaDialog {

  public dialogData;

  constructor(public dialogRef: MdDialogRef<PizzaDialog>) {
    this.dialogData = FsCustomGridCardsService.featuresData;
  }

  ngOnInit() {
  }
}