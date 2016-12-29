import { ComponentFixture, TestBed, inject } from '@angular/core/testing';
import { By }              from '@angular/platform-browser';
import { DebugElement }    from '@angular/core';
import { MaterialModule } from '@angular/material';
import { RouterModule } from '@angular/router';
import { APP_BASE_HREF } from '@angular/common';

// Load the implementations that should be tested
import { ShellComponent } from './shell.component';

let component:  ShellComponent;
let fixture:    ComponentFixture<ShellComponent>;
let debug:      DebugElement;
let element:    HTMLElement;
const routes = [{ path: '', component: ShellComponent}];

describe('App Shell', () => {
  // provide our implementations or mocks to the dependency injector
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterModule.forRoot(routes),
        MaterialModule.forRoot()
      ],
      declarations: [
        ShellComponent
      ], // declare the test component
      providers: [{provide: APP_BASE_HREF, useValue : '/' }]
    })
    .compileComponents(); // compile template and css

    fixture = TestBed.createComponent(ShellComponent);

    component = fixture.componentInstance; // ShellComponent test instance

    // query for the first <a> by CSS element selector
    debug = fixture.debugElement.query(By.css('a'));

    element = debug.nativeElement;
  });

  it('should have first route called Home', () => {
    fixture.detectChanges();
    expect(element.textContent).toContain('Home');
  });

});
