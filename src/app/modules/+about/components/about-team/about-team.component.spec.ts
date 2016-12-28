import { ComponentFixture, TestBed, async, inject } from '@angular/core/testing';
import { By }              from '@angular/platform-browser';
import { DebugElement, CUSTOM_ELEMENTS_SCHEMA  }    from '@angular/core';

// Load the implementations that should be tested
import { AboutTeamComponent } from '../about-team/about-team.component';
import { AboutTeamService } from '../about-team/about-team.service';

import { MaterialModule } from '@angular/material';

let component:    AboutTeamComponent;
let fixture: ComponentFixture<AboutTeamComponent>;

describe('Modules -> about -> about-team -> AboutTeamComponent', () => {
  const users = [{
    'name': 'David Chavarri',
    'job': 'Front Architect',
    'image': '/assets/img/team/david-min.jpg',
    'description': 'React Ninja',
    'github': 'https://github.com/DvdChavarri'
  },
  {
    'name': 'Arturo Zarzalejo',
    'job': 'Fantasy Architect',
    'image': '/assets/img/team/arturo-min.jpg',
    'description': 'Sexy Fantasy Everywhere',
    'github': 'https://github.com/Arturozh'
  }];

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        MaterialModule.forRoot()
      ],
      declarations: [ AboutTeamComponent ],
      providers: [ AboutTeamService ],
      schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
    }).compileComponents();
    
    fixture = TestBed.createComponent(AboutTeamComponent);
    component = fixture.componentInstance;

    let mockData = {
      'users' : [{
          'name': 'David Chavarri',
          'job': 'Front Architect',
          'image': '/assets/img/team/david-min.jpg',
          'description': 'React Ninja',
          'github': 'https://github.com/DvdChavarri'
    }]};

    spyOn(AboutTeamService.prototype, 'search').and.returnValue(mockData);

    component.ngOnInit();
  });

  afterEach(() => {
    fixture.destroy();
  });

  it('should have a defined component', () => {
    expect(component).toBeDefined();
  });

  it('should render users', () => {
    component.dataUsers = users;
    fixture.detectChanges();

    let compiled = fixture.debugElement.nativeElement;

    expect(compiled.querySelectorAll('.user-header').length).toEqual(users.length);

  });
});
