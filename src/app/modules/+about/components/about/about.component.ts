import { Component, ViewEncapsulation } from '@angular/core';
import { FsUsersService } from '../fs-users/fs-users.service';
import { MultiLanguageService } from '../../../../shared/services/multiLanguage.service';

@Component({
  selector: 'about',
  providers: [
    FsUsersService,
    MultiLanguageService
  ],
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss'],
})

export class AboutComponent {
  private dataUsers;

  constructor(private fsUsersService: FsUsersService, translate: MultiLanguageService){
    translate.initialize();
  }
    
  ngOnInit() {
    this.fsUsersService.search().subscribe(
      data => {
        this.dataUsers = data;
    });
  }

}
