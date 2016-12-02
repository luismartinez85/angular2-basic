import { Component } from '@angular/core';
import { Feature } from '../../services/features/feature';
import { FeaturesService } from '../../services/features/features.service';
import { Tech } from '../../services/techs/tech';
import { TechsService } from '../../services/techs/techs.service';
import { MultiLanguageService } from '../../../../shared/services/multiLanguage.service';
import { EnvironmentConfigService } from '../../../../shared/services/environmentConfig.service';

@Component({

  selector: 'home', 
  providers: [
    FeaturesService,
    TechsService,
    MultiLanguageService,
    EnvironmentConfigService
  ],
  styleUrls: [ './home.component.scss' ],
  templateUrl: './home.component.html'
})
export class HomeComponent {
  features: Feature[];
  techs: Tech[];
  rowHeight: string = '200px';

  constructor(
    private featuresService: FeaturesService, 
    private techsService: TechsService, 
    private translate: MultiLanguageService,
    private environmentConfig: EnvironmentConfigService) {

    console.log(environmentConfig.api);
   }

  ngOnInit() {
    this.features = this.featuresService.getFeatures();
    this.techs = this.techsService.getTechs();
    // initialize translate service
    this.translate.initialize();
    /* if you want change language, you need to call method of translateService 
      example: 
      this.translate.setLanguage('es');
    */
    }

}
