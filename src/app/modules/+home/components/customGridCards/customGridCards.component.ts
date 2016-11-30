import { Component, Input } from '@angular/core';
import { MdDialogRef, MdDialog, MdDialogConfig } from '@angular/material';

@Component({
  selector: 'fs-custom-grid-cards',
  templateUrl: './customGridCards.component.html',
  styleUrls: [ './customGridCards.component.scss' ]
})
export class FsCustomGridCardsComponent {

  @Input() elements = [];
  @Input() title;
  @Input() rowHeight;

  dialogRef: MdDialogRef<PizzaDialog>;

  constructor(public dialog: MdDialog) {}

  ngOnInit() {

  }

  openDialog() {
    this.dialogRef = this.dialog.open(PizzaDialog, {
      disableClose: false
    });
    setTimeout( ()=>
      this.dialogRef._overlayRef._pane.querySelector('.md-dialog-container').classList.add('openAnimated')
    ,200);
    console.log('console', this);
    // console.log('JASF', this.dialogRef._overlayRef._pane);
    this.dialogRef.afterClosed().subscribe(result => {
      console.log('result: ' + result);
      this.dialogRef = null;
    });
  }

  close() {
    var args = arguments;
    args[1].open = !args[1].open;
  }

}

@Component({
  selector: 'pizza-dialog',
  templateUrl: './customDialog.html',
})
export class PizzaDialog {
  constructor(public dialogRef: MdDialogRef<PizzaDialog>) { }
}