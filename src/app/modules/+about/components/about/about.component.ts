import { Component, ViewEncapsulation } from '@angular/core';
import { FsUsersService } from '../fs-users/fs-users.service';

@Component({
  selector: 'about',
  providers: [FsUsersService],
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss'],
})

export class AboutComponent {
  private dataUsers;

  constructor(private fsUsersService: FsUsersService){ }

  ngOnInit() {
    this.fsUsersService.search().subscribe(
      data => {
        this.dataUsers = data;
    });
  }

}
