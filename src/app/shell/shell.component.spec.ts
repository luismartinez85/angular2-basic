import { ComponentFixture, TestBed, inject } from '@angular/core/testing';
import { By }              from '@angular/platform-browser';
import { DebugElement }    from '@angular/core';

// Load the implementations that should be tested
import { ShellComponent } from './shell.component';

let comp:    ShellComponent;
let fixture: ComponentFixture<ShellComponent>;
let de:      DebugElement;
let el:      HTMLElement;

describe('App Shell', () => {
  // provide our implementations or mocks to the dependency injector
  beforeEach(() => {
     TestBed.configureTestingModule({
      declarations: [ ShellComponent ], // declare the test component
    })
    .compileComponents(); // compile template and css

    fixture = TestBed.createComponent(ShellComponent);

    comp = fixture.componentInstance; // ShellComponent test instance

    // query for the title <h1> by CSS element selector
    de = fixture.debugElement.query(By.css('a'));
    console.log(de);
    el = de.nativeElement;
  });

  it('should have a url',() => {
    fixture.detectChanges();
    expect(el.textContent).toContain('home');

  });

});
