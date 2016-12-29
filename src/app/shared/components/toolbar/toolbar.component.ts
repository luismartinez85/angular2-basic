import { Component } from '@angular/core';
import { ROUTES_CONSTANTS } from '../../constants/routes/routes.constants';
/*
 * Toolbar Component
 */
@Component({
  selector: 'toolbar',
  styleUrls: ['toolbar.component.scss'],
  templateUrl: 'toolbar.component.html'
})

export class ToolbarComponent {
  ROUTES: any
  constructor(){
    this.ROUTES = ROUTES_CONSTANTS;
  }

 }
