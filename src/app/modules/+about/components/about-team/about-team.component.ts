import { Component } from '@angular/core';
import { AboutTeamService } from './about-team.service';

@Component({
  selector: 'about-team',
  templateUrl: './about-team.component.html',
  styleUrls: [ './about-team.component.scss' ],
  providers: [ AboutTeamService ]
})
export class AboutTeamComponent {

  dataUsers;

  constructor(private aboutTeamService: AboutTeamService){ }

  ngOnInit() {
    this.aboutTeamService.search().subscribe(
      data => {
        this.dataUsers = data;
      });
  }
}
