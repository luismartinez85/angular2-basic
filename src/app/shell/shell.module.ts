import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Router } from '@angular/router';
import { TranslateService } from 'ng2-translate';
import 'hammerjs';

// Import material design module
import { MaterialModule } from '@angular/material';
import { ShellComponent } from './components/shell-main/shell.component';
import { ToolbarComponent } from './components/toolbar/toolbar.component';
import { FooterComponent } from './components/footer/footer.component';
import { routes } from './shell.routes';

@NgModule({
  declarations: [
    ShellComponent,
    ToolbarComponent,
    FooterComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    MaterialModule.forRoot(),
  ],
  providers: [ TranslateService ]
})

export class ShellModule {}
