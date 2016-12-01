import { Component } from '@angular/core';
import { Feature } from '../../services/features/feature';
import { FeaturesService } from '../../services/features/features.service';
import { Tech } from '../../services/techs/tech';
import { TechsService } from '../../services/techs/techs.service';

@Component({

  selector: 'home', 
  providers: [
    FeaturesService,
    TechsService
  ],
  styleUrls: [ './home.component.scss' ],
  templateUrl: './home.component.html'
})
export class HomeComponent {
  features: Feature[];
  techs: Tech[];
  rowHeight: string = '200px';

  constructor(private featuresService: FeaturesService, private techsService: TechsService) {}

  ngOnInit() {
    this.features = this.featuresService.getFeatures();
    this.techs = this.techsService.getTechs();
  }

}
