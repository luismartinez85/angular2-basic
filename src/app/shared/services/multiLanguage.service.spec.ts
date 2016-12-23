import { TestBed, inject } from '@angular/core/testing';
import { MultiLanguageService } from './multiLanguage.service';
import { TRANSLATE_PROVIDERS, TranslateService, TranslateLoader, TranslateParser } from 'ng2-translate';

describe('shared -> MultiLanguageService', () => {

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        MultiLanguageService,
        TranslateService,
        TranslateLoader,
        TranslateParser
      ]
    });
  });

  it('Should be defined',
    inject([MultiLanguageService], (multiLanguageService) => {
      expect(multiLanguageService).toBeDefined();
      // expect(multiLanguageService.toHtml('hi')).toContain('<p>hi</p>');
    })
  );

  it('getLanguage should return undefined',
    inject([MultiLanguageService], (multiLanguageService) => {
      expect(multiLanguageService.getLanguage()).toBe(undefined);
    })
  );

  it('getLanguage should return undefined',
    inject([MultiLanguageService], (multiLanguageService) => {

      expect(multiLanguageService.getLanguage()).toBe('en');
    })
  );


});
