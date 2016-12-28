import { ComponentFixture, TestBed, async, inject } from '@angular/core/testing';
import { By }              from '@angular/platform-browser';
import { DebugElement, CUSTOM_ELEMENTS_SCHEMA }    from '@angular/core';

// Load the implementations that should be tested
import { AboutMainComponent } from './about-main.component';
import { MultiLanguageService } from '../../../../shared/services/multiLanguage/multiLanguage.service';
import { FsUsersService } from '../fs-users/fs-users.service';
import { TranslateModule } from 'ng2-translate';

let component: AboutMainComponent;
let fixture: ComponentFixture<AboutMainComponent>;
let usersElement:      DebugElement;

describe('Module About -> Component About', () => {

  beforeEach(() => {
	  // declare the test component
    TestBed.configureTestingModule({
      imports: [
        TranslateModule.forRoot()
      ],
      providers: [ AboutMainComponent, MultiLanguageService ],
      declarations: [ AboutMainComponent ],
      schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
    })
    .compileComponents();
    fixture = TestBed.createComponent(AboutMainComponent);
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
});
