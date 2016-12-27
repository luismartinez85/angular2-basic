import { Component, Input } from '@angular/core';

@Component({
  selector: 'grid-cards',
  templateUrl: './gridCards.component.html',
  styleUrls: [ './gridCards.component.scss' ]
})
export class GridCardsComponent {

  @Input() elements = [];
  @Input() title;

}
