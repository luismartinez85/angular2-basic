import { ComponentFixture, TestBed, async, inject } from '@angular/core/testing';
import { By }              from '@angular/platform-browser';
import { DebugElement, CUSTOM_ELEMENTS_SCHEMA }    from '@angular/core';

// Load the implementations that should be tested
import { AboutComponent } from './about.component';
import { MultiLanguageService } from '../../../../shared/services/multiLanguage.service';
import { FsUsersService } from '../fs-users/fs-users.service';
import { TranslateModule } from 'ng2-translate';

let component:    AboutComponent;
let fixture: ComponentFixture<AboutComponent>;
let usersElement:      DebugElement;

describe('Module About -> Component About', () => {

 beforeEach(() => {
	  // declare the test component
    TestBed.configureTestingModule({
      imports: [
        TranslateModule.forRoot()
      ],
      providers: [ FsUsersService, MultiLanguageService ],
      declarations: [ AboutComponent ],
      schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
    })
    .compileComponents();
    fixture = TestBed.createComponent(AboutComponent);
    // Render
    fixture.detectChanges();

    component = fixture.componentInstance; // BannerComponent test instance
    component.ngOnInit();

		// Render
    fixture.detectChanges();
  });

  afterEach(() => {
    fixture.destroy();
  });

  it('should have a defined component', () => {
      expect(component).toBeDefined();
  });

  // it('should have DataUsers', inject([ AboutComponent ], (about: AboutComponent) => {
  //   expect(!!about.dataUsers).toEqual(true);
  // }));
});
