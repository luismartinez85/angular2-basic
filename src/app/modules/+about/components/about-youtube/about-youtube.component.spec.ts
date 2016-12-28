/*
import { ComponentFixture, TestBed, inject } from '@angular/core/testing';
import { By }              from '@angular/platform-browser';
import { DebugElement }    from '@angular/core';
import { MaterialModule } from '@angular/material';

// Load the implementations that should be tested
import { FsYoutubeAPIComponent } from './fs-youtube-api.component';

let component:  FsYoutubeAPIComponent;
let fixture:    ComponentFixture<FsYoutubeAPIComponent>;
let debug:      DebugElement;
let element:    HTMLElement;

describe('shared -> FsYoutubeAPIComponent', () => {
   //  provide our implementations or mocks to the dependency injector
  beforeEach(() => {
     TestBed.configureTestingModule({
      imports: [
        MaterialModule.forRoot()
      ],
      declarations: [
        FsYoutubeAPIComponent
      ]
    })
    .compileComponents(); // compile template and css

    fixture = TestBed.createComponent(FsYoutubeAPIComponent);

    component = fixture.componentInstance; // ShellComponent test instance

    // query for the first <a> by CSS element selector
    debug = fixture.debugElement.query(By.css('a'));

    element = debug.nativeElement;
  });

  it('should have first route called Home',() => {
    fixture.detectChanges();
    expect(element.textContent).toContain('Home');
  });

});
*/
