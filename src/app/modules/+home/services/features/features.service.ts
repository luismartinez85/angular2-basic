import { Injectable } from '@angular/core';
import { FEATURES } from './mock-features';
import { Feature } from './feature';

@Injectable()
export class FeaturesService {

  getFeatures(): Array<Feature> {
    return FEATURES;
  }

}
