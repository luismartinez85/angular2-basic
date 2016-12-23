import { Component, Input, ViewEncapsulation, ChangeDetectionStrategy, OnInit, NgZone, ApplicationRef } from '@angular/core';
import { MdDialogRef, MdDialog, MdDialogConfig } from '@angular/material';
import { SafeResourceUrl, DomSanitizer } from '@angular/platform-browser';
import { FsYoutubeDialog } from './fs-youtube-api-dialog.component';

// import { CORE_DIRECTIVES } from '@angular/common';

import { FsYoutubeAPIService } from './fs-youtube-api.service';

@Component({
  selector: 'fs-youtube-api',
  providers: [ FsYoutubeAPIService ],
  styleUrls: [ 'fs-youtube-api.component.scss' ],
  templateUrl: 'fs-youtube-api.component.html',
  // changeDetection: ChangeDetectionStrategy.OnPush
})

export class FsYoutubeAPIComponent{
  dataYoutube: Array<any>;
  searchString: string = '';
  dialogRef: MdDialogRef<FsYoutubeDialog>;


  constructor(private fsyoutubeapiservice: FsYoutubeAPIService, private _ngZone: NgZone, private lc: ApplicationRef, public dialog: MdDialog, private sanitize: DomSanitizer) {
    // this.name = 'hola';
  }

  ngOnInit () {
    this.fsyoutubeapiservice.search().subscribe(
      data => {
        this.dataYoutube = data.items;
    });
  }

  ngOnChanges () {
  }

  openDialog() {
    FsYoutubeAPIService.actualYoutubeData = arguments[0];
    FsYoutubeAPIService.actualYoutubeData.id.videoId = 
      this.sanitize.bypassSecurityTrustResourceUrl('https://www.youtube.com/embed/'+FsYoutubeAPIService.actualYoutubeData.id.videoId);
    this.dialogRef = this.dialog.open(FsYoutubeDialog, {
      disableClose: false
    });
    console.log('argumentos', arguments);
    console.log(this.dialogRef);
    setTimeout( () =>
      document.querySelector('.md-dialog-container').classList.add('openAnimated')
    , 0);
    this.dialogRef.afterClosed().subscribe(result => {
      console.log('result: ' + result);
      this.dialogRef = null;
    });
  }

}
