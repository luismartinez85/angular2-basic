import { ComponentFixture, TestBed, inject } from '@angular/core/testing';


import { By } from '@angular/platform-browser/src/dom/debug/by';

import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

import { MaterialModule } from '@angular/material';

// Load the implementations that should be tested
import { HomeTechnologiesComponent } from './home-technologies.component';

describe('Module Home -> Component HomeTechnologies', () => {
  let component: HomeTechnologiesComponent;
  let fixture;

  const elements = [
    {
      title: 'example1',
      description: 'description example1'
    },
    {
      title: 'example2',
      description: 'description example2'
    }
  ];


  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        MaterialModule.forRoot()
      ],
      declarations: [ HomeTechnologiesComponent ],
      schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
    })
    .compileComponents(); // compile template and css

    fixture = TestBed.createComponent(HomeTechnologiesComponent);
    component = fixture.componentInstance;
  });

  it('should have a defined component', () => {
    expect(component).toBeDefined();
  });

  it('should render elements correctly, same number of elements', () => {

    component.elements = elements;
    fixture.detectChanges();

    let compiled = fixture.debugElement.nativeElement;

    expect(compiled.querySelectorAll('.description_tech').length).toEqual(elements.length);
  });

});
