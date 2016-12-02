import { Component, Input, ViewEncapsulation, ChangeDetectionStrategy, OnInit, NgZone, ApplicationRef } from '@angular/core';
import { MdDialogRef, MdDialog, MdDialogConfig } from '@angular/material';
import { FsYoutubeAPIService } from './fs-youtube-api.service';

@Component({
  selector: 'youtube-dialog',
  templateUrl: './fs-youtube-api.dialog.html',
  providers: [ FsYoutubeAPIService ]
})
export class FsYoutubeDialog {

  public dialogData;

  constructor(public dialogRef: MdDialogRef<FsYoutubeDialog>, public youtubeApiService: FsYoutubeAPIService) {
    console.log('init constructor', arguments);
    this.dialogData = FsYoutubeAPIService.actualYoutubeData;
  }

   ngOnInit() {
  }
}