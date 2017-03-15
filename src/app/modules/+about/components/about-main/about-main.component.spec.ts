import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CUSTOM_ELEMENTS_SCHEMA }    from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
// Load the implementations that should be tested
import { AboutMainComponent } from './about-main.component';
import { MultiLanguageService } from '../../../../shared';

import { TranslateModule } from 'ng2-translate';


let component:  AboutMainComponent;
let fixture: ComponentFixture<AboutMainComponent>;

describe('Modules -> About -> Component About', () => {

  beforeEach(() => {
	  // declare the test component
    TestBed.configureTestingModule({
      imports: [
        TranslateModule.forRoot(),
        BrowserAnimationsModule
      ],
      providers: [ MultiLanguageService ],
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
