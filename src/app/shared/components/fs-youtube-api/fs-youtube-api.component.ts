import { Component, Input, ViewEncapsulation, ChangeDetectionStrategy, OnInit, NgZone, ApplicationRef } from '@angular/core';
import { MdDialogRef, MdDialog, MdDialogConfig } from '@angular/material';
import { SafeResourceUrl, DomSanitizer } from '@angular/platform-browser';
import { FsYoutubeDialog } from '../fs-youtube-api-dialog/fs-youtube-api-dialog.component';
import { FsYoutubeAPIService } from './fs-youtube-api.service';

@Component({
  selector: 'fs-youtube-api',
  providers: [ FsYoutubeAPIService ],
  styleUrls: [ 'fs-youtube-api.component.scss' ],
  templateUrl: 'fs-youtube-api.component.html'
})

export class FsYoutubeAPIComponent{
  dataYoutube: Array<any>;
  searchString: string = '';
  dialogRef: MdDialogRef<FsYoutubeDialog>;

  constructor(private fsyoutubeapiservice: FsYoutubeAPIService, private _ngZone: NgZone, private lc: ApplicationRef, public dialog: MdDialog, private sanitize: DomSanitizer) { }

  ngOnInit () {
    this.fsyoutubeapiservice.search().subscribe(
      data => {
        this.dataYoutube = data.items;
    });
  }

  openDialog() {
    FsYoutubeAPIService.actualYoutubeData = arguments[0];
    FsYoutubeAPIService.actualYoutubeData.id.videoId = this.sanitize.bypassSecurityTrustResourceUrl('https://www.youtube.com/embed/'+FsYoutubeAPIService.actualYoutubeData.id.videoId);
    this.dialogRef = this.dialog.open(FsYoutubeDialog, {
      disableClose: false
    });

    setTimeout( () =>
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
