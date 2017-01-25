import { Component, Input } from '@angular/core';

/**
 * Image list component. Shared component
 */
@Component({
  selector: 'image-list',
  templateUrl: './image-list.component.html',
  styleUrls: [ './image-list.component.scss' ]
})

export class ImageListComponent {

  @Input() elements: Array<any> = [];
}
