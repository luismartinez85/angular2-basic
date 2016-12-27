/*import { ComponentFixture, TestBed, inject } from '@angular/core/testing';


import { By } from '@angular/platform-browser/src/dom/debug/by';

import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

import { MaterialModule, MdDialogRef, MdDialog, MdDialogConfig  } from '@angular/material';

import { CustomGridCardsService } from '../customGridCards/customGridCards.service'

// Load the implementations that should be tested
import { CustomModal } from './customModal.component';

describe('Module Home -> Component CustomModal', () => {
  let component: CustomModal;
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
      declarations:[ CustomModal ],
      schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
    })
    .compileComponents(); // compile template and css	

    fixture = TestBed.createComponent(CustomModal);
    component = fixture.componentInstance;

		spyOn(CustomGridCardsService.prototype, 'featuresData').and.returnValue(element);

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