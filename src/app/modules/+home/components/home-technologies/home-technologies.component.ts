import { Component, Input } from '@angular/core';

@Component({
  selector: 'home-technologies',
  templateUrl: './home-technologies.component.html',
  styleUrls: [ './home-technologies.component.scss' ]
})
export class HomeTechnologiesComponent {

  @Input() elements = [];
  @Input() title;

}
