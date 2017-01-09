import { Component } from '@angular/core';
import { ROUTES_CONSTANTS } from '../../constants/routes.constants';
/*
 * Toolbar Component
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
