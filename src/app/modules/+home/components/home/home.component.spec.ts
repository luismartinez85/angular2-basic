import {
  inject,
  TestBed
} from '@angular/core/testing';
import { Component } from '@angular/core';
import {
  BaseRequestOptions,
  ConnectionBackend,
  Http
} from '@angular/http';
import { MockBackend } from '@angular/http/testing';
import { FeaturesService } from '../../services/features/features.service';
import { TechsService } from '../../services/techs/techs.service';
import { MultiLanguageService } from '../../../../shared/services/multiLanguage.service'; 

// Load the implementations that should be tested
import { HomeComponent } from './home.component';

describe('Home', () => {
  let component;
  // provide our implementations or mocks to the dependency injector
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        BaseRequestOptions,
        HomeComponent,
        FeaturesService,
        TechsService,
        MultiLanguageService
      ]
    });
    const fixture = TestBed.createComponent(HomeComponent);
    component = fixture.componentInstance;
  });
/*
  it('should have a defined component', () => {
    expect(component).toBeDefined();
  });*/
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
