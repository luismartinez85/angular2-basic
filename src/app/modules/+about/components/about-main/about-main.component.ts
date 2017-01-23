import { Component } from '@angular/core';
import { MultiLanguageService } from '../../../../shared/services/multiLanguage/multiLanguage.service';

/**
 * Component About main, bootstraping component of About module lazy load.
 */
@Component({
  selector: 'about-main',
  providers: [ MultiLanguageService ],
  templateUrl: './about-main.component.html',
  styleUrls: ['./about-main.component.css'],
})

export class AboutMainComponent {
  
  tabActive = {
    value: 'team'
  }

  constructor(private translate: MultiLanguageService){ }

  ngOnInit() {
    this.translate.initialize();
  }
}
