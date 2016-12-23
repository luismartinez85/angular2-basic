import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Router } from '@angular/router';
import { TranslateService } from 'ng2-translate';
import { Observable }     from 'rxjs/Observable';
import { ShellUtilService } from './shell.service';


// Import material design module
import { MaterialModule } from '@angular/material';
import { ShellComponent } from './shell.component';
import { routes } from './shell.routes';

@NgModule({
  declarations: [
    ShellComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    MaterialModule.forRoot(),
  ],
  providers: [TranslateService]
})

export class ShellModule { 
  private element;
  constructor (private route:Router) {
     route.events.subscribe((val) => {
      console.log('sdfasdf', val);
      this.element = document.querySelector('.sidenavList > [href*="#'+ val.url+'"]');
      ShellUtilService.element = this.element;
      console.log('this.element', this.element);
    })
  }
}
