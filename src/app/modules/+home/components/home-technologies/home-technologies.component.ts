import { Component, Input } from '@angular/core';
import { Tech } from '../../services/techs';
/**
 * Home technologies shows a list of technologies. Receives an array of Tech.
 */
@Component({
  selector: 'home-technologies',
  templateUrl: './home-technologies.component.html',
  styleUrls: [ './home-technologies.component.scss' ]
})

export class HomeTechnologiesComponent {

  @Input() elements:Array<Tech> = [];

}
