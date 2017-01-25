import { Component, Input, ElementRef, ViewChild } from '@angular/core';

import { HomeFeatureModal } from '../home-feature-modal/home-feature-modal.component';
import { Feature } from '../../services/features';

/**
 * Loads features passed by param
 */
@Component({
  selector: 'home-features',
  templateUrl: './home-features.component.html',
  styleUrls: [ './home-features.component.css' ]
})

export class HomeFeaturesComponent {

  @Input() elements: Array<Feature> = [];
  @ViewChild('search')
  search: ElementRef;
  element: HTMLElement;

}

