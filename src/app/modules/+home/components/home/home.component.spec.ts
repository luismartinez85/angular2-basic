import {
  inject,
  TestBed
} from '@angular/core/testing';
import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import {
  BaseRequestOptions,
  ConnectionBackend,
  Http
} from '@angular/http';
import { MockBackend } from '@angular/http/testing';
import { FeaturesService } from '../../services/features/features.service';
import { TechsService } from '../../services/techs/techs.service';
import { MultiLanguageService } from '../../../../shared/services/multiLanguage.service'; 
import { EnvironmentConfigService } from '../../../../shared/services/environmentConfig.service'; 


import { MaterialModule } from '@angular/material';
import { TranslateModule } from 'ng2-translate';

// Load the implementations that should be tested
import { HomeComponent } from './home.component';

describe('Home', () => {
  let component: HomeComponent;
  // provide our implementations or mocks to the dependency injector
  beforeEach(() => {
    TestBed.configureTestingModule({
  //  declarations:[FsCustomGridCardsComponent],
      imports: [
        TranslateModule.forRoot(),
        MaterialModule.forRoot()
      ],
      providers: [EnvironmentConfigService],      
      declarations:[HomeComponent],
      schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
    })
    .compileComponents(); // compile template and css
    const fixture = TestBed.createComponent(HomeComponent);
    component = fixture.componentInstance;
  });

  it('should have a defined component', () => {
    expect(component).toBeDefined();
  });
  // it('should have a rowHeight', inject([ HomeComponent ], (home: HomeComponent) => {
  //   expect(!!home.rowHeight).toEqual(true);
  // }));

  // it('should log ngOnInit', inject([ HomeComponent ], (home: HomeComponent) => {
  //   spyOn(console, 'log');
  //   expect(console.log).not.toHaveBeenCalled();

  //   home.ngOnInit();
  //   expect(console.log).toHaveBeenCalled();
  // }));
});
