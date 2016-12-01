import { Component, Input, ViewEncapsulation, ChangeDetectionStrategy, OnInit, NgZone, ApplicationRef } from '@angular/core';
import { MdDialogRef, MdDialog, MdDialogConfig } from '@angular/material';
import { SafeResourceUrl, DomSanitizer } from '@angular/platform-browser';

// import { CORE_DIRECTIVES } from '@angular/common';

import { FsYoutubeAPIService } from './fs-youtube-api.service';

@Component({
  selector: 'fs-youtube-api',
  providers: [ FsYoutubeAPIService ],
  styleUrls: [ 'fs-youtube-api.component.scss' ],
  templateUrl: 'fs-youtube-api.component.html',
  // changeDetection: ChangeDetectionStrategy.OnPush
})

export class FsYoutubeAPIComponent implements OnInit {
  @Input() title: string;
  dataYoutube: Array<any>;
  searchString: string = '';
  dialogRef: MdDialogRef<FsYoutubeDialog>;


  constructor(private fsyoutubeapiservice: FsYoutubeAPIService, private _ngZone: NgZone, private lc: ApplicationRef, public dialog: MdDialog, private sanitize: DomSanitizer) {
    // this.name = 'hola';
  }

  ngOnInit () {
    this.fsyoutubeapiservice
    .search()
    .subscribe(
      data => {
        this.dataYoutube = data.items;
        console.log(data);
    });
  }

  ngOnChanges () {
  }

  openDialog() {
    this.dialogRef = this.dialog.open(FsYoutubeDialog, {
      disableClose: false
    });
    console.log('argumentos', arguments);
    this.dialogRef.obj = arguments[0];
    this.dialogRef.obj.id.videoId = this.sanitize.bypassSecurityTrustResourceUrl('https://www.youtube.com/embed/'+this.dialogRef.obj.id.videoId);
    setTimeout( ()=>
      this.dialogRef._overlayRef._pane.querySelector('.md-dialog-container').classList.add('openAnimated')
    ,0);
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
  selector: 'youtube-dialog',
  templateUrl: './fs-youtube-api.dialog.html',
})
export class FsYoutubeDialog {

  public dialogData;

  constructor(public dialogRef: MdDialogRef<FsYoutubeDialog>) {
    console.log('init constructor', arguments);
    this.dialogData = arguments[0];
   }

   ngOnInit() {
  }
}
