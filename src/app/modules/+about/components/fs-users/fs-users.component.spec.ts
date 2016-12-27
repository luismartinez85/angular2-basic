import { ComponentFixture, TestBed, async, inject } from '@angular/core/testing';
import { By }              from '@angular/platform-browser';
import { DebugElement, CUSTOM_ELEMENTS_SCHEMA  }    from '@angular/core';

// Load the implementations that should be tested
import { FsUsersComponent } from '../fs-users/fs-users.component';
import { FsUsersService } from '../fs-users/fs-users.service';

import { MaterialModule } from '@angular/material';

let component:    FsUsersComponent;
let fixture: ComponentFixture<FsUsersComponent>;

describe('Module FsUsers -> Component FsUser', () => {
  const users = {
    users:[
      {
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
    }]
  };

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        MaterialModule.forRoot()
      ],
      declarations: [ FsUsersComponent ],
      schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
    }).compileComponents();
    fixture = TestBed.createComponent(FsUsersComponent);
    component = fixture.componentInstance;

  });

  afterEach(() => {
    fixture.destroy();
  });

  it('should have a defined component', () => {
    expect(component).toBeDefined();
  });

  it('should render users', () => {

    component.users = users;
    fixture.detectChanges();

    let compiled = fixture.debugElement.nativeElement;

    expect(compiled.querySelectorAll('.user-header').length).toEqual(users.users.length);

  });
});
