import { Component } from '@angular/core';
import { MultiLanguageService } from '../../../../shared';
import { AboutTeamService } from '../../services/about-team/about-team.service';

/**
 * Component About main, bootstraping component of About module lazy load.
 */
@Component({
  selector: 'about-main',
  providers: [ MultiLanguageService, AboutTeamService ],
  templateUrl: './about-main.component.html',
  styleUrls: ['./about-main.component.css'],
})

export class AboutMainComponent {
  tabActive: string = 'team';
  team;

  constructor(private translate: MultiLanguageService,
              private aboutTeamService: AboutTeamService){ }

  ngOnInit() {
    this.translate.initialize();

    this.aboutTeamService.search().subscribe(
      data => {
        this.team = data;
      });
  }
}
