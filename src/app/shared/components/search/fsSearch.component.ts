import { Component, Input, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'fs-search',
  templateUrl: 'fsSearch.component.html',
  styleUrls: ['fsSearch.component.scss']
})

export class FsSearchComponent { 
  @Input() searchString: string;

  constructor(){

  }


}
