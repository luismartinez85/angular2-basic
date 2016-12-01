import { ComponentFixture, TestBed, async, inject } from '@angular/core/testing';
import { By }              from '@angular/platform-browser';
import { DebugElement }    from '@angular/core';

// Load the implementations that should be tested
import { FsUsersComponent } from '../fs-users/fs-users.component';
import { FsUsersService } from '../fs-users/fs-users.service';

let component:    FsUsersComponent;
let fixture: ComponentFixture<FsUsersComponent>;
let usersElement:      DebugElement;

describe('FsUsersComponent', () => {

 beforeEach(() => {
	  // declare the test component
    TestBed.configureTestingModule({
      declarations: [ FsUsersComponent ]
    }).compileComponents().then(() => {
        fixture = TestBed.createComponent(FsUsersComponent);



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