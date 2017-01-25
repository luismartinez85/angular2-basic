import { TestBed } from '@angular/core/testing';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

// Load the implementations that should be tested
import { HomeListComponent } from './home-list.component';
import { Tech } from '../../services/techs';

describe('Module Home -> Component HomeList', () => {
  let component: HomeListComponent;
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
      ],
      declarations: [ HomeListComponent ],
      schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
    })
    .compileComponents(); // compile template and css

    fixture = TestBed.createComponent(HomeListComponent);
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
