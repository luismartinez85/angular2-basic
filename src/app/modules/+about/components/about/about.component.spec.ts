import { ComponentFixture, TestBed, async, inject } from '@angular/core/testing';
import { By }              from '@angular/platform-browser';
import { DebugElement }    from '@angular/core';

// Load the implementations that should be tested
import { AboutComponent } from './about.component';
import { FsUsersComponent } from '../fs-users/fs-users.component';
import { FsUsersService } from '../fs-users/fs-users.service';

let component:    AboutComponent;
let fixture: ComponentFixture<AboutComponent>;
let usersElement:      DebugElement;

describe('About', () => {

 beforeEach(() => {
	  // declare the test component
    TestBed.configureTestingModule({
      declarations: [ AboutComponent ]
    }).compileComponents().then(() => {
        fixture = TestBed.createComponent(AboutComponent);

        fixture.detectChanges();
    });


    //component = fixture.componentInstance; // BannerComponent test instance

		// Render
//		fixture.detectChanges();

		// query for the title <h1> by CSS element selector
  //  usersElement = fixture.debugElement.query(By.css('fs-users'));
  });

	afterEach(() => {
    fixture.destroy();
  });

	// it('should create component', inject([FsUsersService], (fsUsersService: FsUsersService) => {
  //     // Perform test using fixture and service
  // }));



  // it('should load team members', () => {
    
  //  // expect(usersElement.context).toContain('Test Title');
  // });
});