/*import { ComponentFixture, TestBed, inject } from '@angular/core/testing';


import { By } from '@angular/platform-browser/src/dom/debug/by';

import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

import { MaterialModule, MdDialogRef, MdDialog, MdDialogConfig, OverlayRef  } from '@angular/material';

import { HomeFeaturesService } from '../home-features/home-features.service'

// Load the implementations that should be tested
import { HomeFeatureModal } from './home-feature-modal.component';

describe('Module Home -> Component HomeFeatureModal', () => {
  let component: HomeFeatureModal;
  let fixture;

  const element = {
    title: 'example1',
    description: 'description example1'
  };

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        MaterialModule.forRoot(),
      ],
      providers: [ MdDialogRef, OverlayRef],
      declarations:[ HomeFeatureModal ],
      schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
    })
    .compileComponents(); // compile template and css	

    fixture = TestBed.createComponent(HomeFeatureModal);
    component = fixture.componentInstance;

    spyOn(HomeFeaturesService.prototype, 'featuresData').and.returnValue(element);

  });

  it('should have a defined component', () => {
    expect(component).toBeDefined();
  });

  it('should render elements correctly', () => {

    fixture.detectChanges();

    let compiled = fixture.debugElement.nativeElement;

    expect(compiled.querySelectorAll('.description').innerHtml).toEqual(element.description);
  });



  
});
*/
