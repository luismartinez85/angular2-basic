import { ComponentFixture, TestBed, inject } from '@angular/core/testing';
import { By }              from '@angular/platform-browser';
import { DebugElement }    from '@angular/core';
import { MaterialModule } from '@angular/material';
import { FsTwitterAPIService } from './fs-twitter-api.service';
import { Observable } from 'rxjs/Rx';

// Load the implementations that should be tested
import { FsTwitterAPIComponent } from './fs-twitter-api.component';

let component:  FsTwitterAPIComponent;
let fixture:    ComponentFixture<FsTwitterAPIComponent>;
let debug:      DebugElement;
let element:    HTMLElement;
let fsTwitterAPIService: FsTwitterAPIService;
let spy;
let data;

class MockTestService {

  search() {
    return Observable.of([
        {
          avatar: 'prueba.png',
          author: 'Josh',
          date: 'today',
          tweet: 'fake tweet'
        }
    ]);
  }
}

describe('Twitter API component', () => {
  let service = new MockTestService();

  // provide our implementations or mocks to the dependency injector
  beforeEach(() => {
     TestBed.configureTestingModule({
      imports: [
        MaterialModule.forRoot(),
      ],
      declarations: [
        FsTwitterAPIComponent
      ],
      providers: [
          { provide: FsTwitterAPIService, useClass: service }
      ]
    })
   .compileComponents().then(() => {
        fixture = TestBed.createComponent(FsTwitterAPIComponent);
        component = fixture.componentInstance; // ShellComponent test instance
    });
  });

  it('should have first route called Home',() => {
    fixture.detectChanges();

    expect(component.dataTwitter.length).toBeGreaterThan(0);
  });

});
