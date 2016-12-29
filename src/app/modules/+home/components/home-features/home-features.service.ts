import { Injectable } from '@angular/core';

@Injectable()
export class HomeFeaturesService {
  public static featuresData: Object = {};

  selectData(element) {
    HomeFeaturesService.featuresData = element;
  }
}