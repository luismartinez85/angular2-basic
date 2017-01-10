import { Component } from '@angular/core';

import { MultiLanguageService } from '../../../../shared/services/multiLanguage/multiLanguage.service';
import { EnvironmentConfigService } from '../../../../shared/services/environmentConfig/environmentConfig.service';

import { Feature, FeaturesService } from '../../services/features';
import { Tech, TechsService } from '../../services/techs';

@Component({
  selector: 'home-main',
  providers: [
    FeaturesService,
    TechsService,
    MultiLanguageService,
    EnvironmentConfigService
  ],
  styleUrls: [ './home-main.component.scss' ],
  templateUrl: './home-main.component.html'
})

export class HomeMainComponent {
  /**
   * This is a doc comment for "feature".
   */
  features: Array<Feature> = [];

  /**
   * This is a doc comment for "techs".
   */
  techs: Array<Tech> = [];
  rowHeight: string = '200px';

  constructor(
    private featuresService: FeaturesService,
    private techsService: TechsService,
    private translate: MultiLanguageService,
    private environmentConfig: EnvironmentConfigService) {
  }

  /**
   * Comment for method ngOnInit.
   * @param target  Comment for parameter ´something´.
   * @returns       Comment for return ´something´.
   */
  ngOnInit() {
    this.features = this.featuresService.getFeatures();
    this.techs = this.techsService.getTechs();
    console.log(this.environmentConfig.api);

    // initialize translate service
    this.translate.initialize();
    /* if you want change language, you need to call method of translateService 
      example: 
      this.translate.setLanguage('es');
    */
  }

}
