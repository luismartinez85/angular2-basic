import { TestBed } from '@angular/core/testing';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { MaterialModule } from '@angular/material';

// Load the implementations that should be tested
import { HomeTechnologiesComponent } from './home-technologies.component';
import { Tech } from '../../services/techs';

describe('Module Home -> Component HomeTechnologies', () => {
  let component: HomeTechnologiesComponent;
  let fixture;

  const elements: Array<Tech> = [
    {
      title: 'example1',
      description: 'description example1',
      image: '',
      icon: ''
    },
    {
      title: 'example2',
      description: 'description example2',
      image: '',
      icon: ''
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

    expect(compiled.querySelectorAll('.tech-item-text').length).toEqual(elements.length);
  });

});
