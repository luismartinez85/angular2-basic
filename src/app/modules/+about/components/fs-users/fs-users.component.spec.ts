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
    console.log(" FsUsers:: " + component);
    // Render
    fixture.detectChanges();
  });

  afterEach(() => {
    fixture.destroy();
  });

  // it('should have a defined component', () => {
  //     expect(component).toBeDefined();
  // });

});
