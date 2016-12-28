import { Component, Input, ViewEncapsulation, ChangeDetectionStrategy, OnInit, NgZone, ApplicationRef } from '@angular/core';
import { MdDialogRef, MdDialog, MdDialogConfig } from '@angular/material';
import { SafeResourceUrl, DomSanitizer } from '@angular/platform-browser';
import { AboutYoutubeModal } from '../about-youtube-modal/about-youtube-modal.component';
import { AboutYoutubeService } from './about-youtube.service';

@Component({
  selector: 'about-youtube',
  providers: [ AboutYoutubeService ],
  styleUrls: [ 'about-youtube.component.scss' ],
  templateUrl: 'about-youtube.component.html'
})

export class AboutYoutubeComponent{
  dataYoutube: Array<any>;
  searchString: string = '';
  dialogRef: MdDialogRef<AboutYoutubeModal>;

  constructor(private fsyoutubeapiservice: AboutYoutubeService, private _ngZone: NgZone, private lc: ApplicationRef, public dialog: MdDialog, private sanitize: DomSanitizer) { }

  ngOnInit () {
    this.fsyoutubeapiservice.search().subscribe(
      data => {
        this.dataYoutube = data.items;
      }
    );
  }

  openDialog(item) {
    AboutYoutubeService.actualYoutubeData = item;
    AboutYoutubeService.actualYoutubeData.id.videoId =
      this.sanitize.bypassSecurityTrustResourceUrl('https://www.youtube.com/embed/' + AboutYoutubeService.actualYoutubeData.id.videoId);
    this.dialogRef = this.dialog.open(AboutYoutubeModal, {
      disableClose: false
    });
    /* TO CHECK IT */
    setTimeout( () =>
      document.querySelector('.md-dialog-container').classList.add('openAnimated')
    , 0);

    this.dialogRef.afterClosed().subscribe(result => {
      this.dialogRef = null;
    });
  }
}

