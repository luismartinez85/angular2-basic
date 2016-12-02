import { Component, Input } from '@angular/core';
import { MdDialogRef, MdDialog, MdDialogConfig } from '@angular/material';
import { FsCustomGridCardsService } from './customGridCards.service';
import { PizzaDialog } from './customGridCardsDialog.component';

@Component({
  selector: 'fs-custom-grid-cards',
  templateUrl: './customGridCards.component.html',
  styleUrls: [ './customGridCards.component.scss' ]
})
export class FsCustomGridCardsComponent {

  @Input() elements = [];
  @Input() title;

  dialogRef: MdDialogRef<PizzaDialog>;

  constructor(public dialog: MdDialog) {

  }

  ngOnInit() {

  }

  openDialog() {
    FsCustomGridCardsService.featuresData = arguments[0];

    this.dialogRef = this.dialog.open(PizzaDialog, {
      disableClose: false
    });
    setTimeout( ()=>
      document.querySelector('.md-dialog-container').classList.add('openAnimated')
    , 0);
    this.dialogRef.afterClosed().subscribe(result => {
      this.dialogRef = null;
    });
  }

  close() {
    let args = arguments;
    args[1].open = !args[1].open;
  }

}

