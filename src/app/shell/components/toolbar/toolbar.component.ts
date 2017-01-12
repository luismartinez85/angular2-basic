import { Component } from '@angular/core';
import { ROUTES_CONSTANTS } from '../../../shared';
/*
 * Toolbar Component which contains routes of our application. 
 */
@Component({
  selector: 'toolbar',
  styleUrls: ['toolbar.component.scss'],
  templateUrl: 'toolbar.component.html'
})

export class ToolbarComponent {

  routes: any;

  constructor(){
    this.routes = ROUTES_CONSTANTS;
  }

}
