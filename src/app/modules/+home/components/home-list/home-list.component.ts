import { Component, Input } from '@angular/core';
import { Tech } from '../../services/techs';

/**
 * Home technologies shows a list of technologies. Receives an array of Tech.
 */
@Component({
  selector: 'home-list',
  templateUrl: './home-list.component.html',
  styleUrls: [ './home-list.component.scss' ]
})

export class HomeListComponent {

  @Input() elements: Array<Tech> = [];
}
