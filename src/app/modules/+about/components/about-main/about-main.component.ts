import { Component, ViewEncapsulation } from '@angular/core';
import { MultiLanguageService } from '../../../../shared/services/multiLanguage/multiLanguage.service';

@Component({
  selector: 'about-main',
  providers: [ MultiLanguageService ],
  templateUrl: './about-main.component.html',
  styleUrls: ['./about-main.component.scss'],
})

export class AboutMainComponent {

  constructor(private translate: MultiLanguageService){ }

  ngOnInit() {
    this.translate.initialize();
  }
}
