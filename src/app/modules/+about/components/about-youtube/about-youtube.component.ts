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

  constructor ( 
    private aboutYoutubeService: AboutYoutubeService,  
    private _ngZone: NgZone,  
    private lc: ApplicationRef,  
    public dialog: MdDialog) { } 
 
  ngOnInit () { 
    this.aboutYoutubeService.search().subscribe( 
      data => { 
        this.dataYoutube = data.items; 
      } 
    ); 
  } 
  openVideo(item) { 
    this.aboutYoutubeService.selectVideo(item); 

    this.dialog.open(AboutYoutubeModal, { 
      disableClose: false 
    }); 
  }
}

