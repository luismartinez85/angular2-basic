import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MaterialModule } from '@angular/material';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterTestingModule } from '@angular/router/testing';
import { ROUTES } from '../../../app.routes';

import { ToolbarComponent } from './toolbar.component';
import { NoContentComponent } from '../no-content/noContent.component';

let component:  ToolbarComponent;
let fixture:    ComponentFixture<ToolbarComponent>;

describe('shared -> ToolbarComponent', () => {
  beforeEach(() => {
    // refine the test module by declaring the test component
    TestBed.configureTestingModule({
      declarations: [
        ToolbarComponent,
        NoContentComponent
      ],
      imports: [
        MaterialModule.forRoot(),
        RouterTestingModule.withRoutes(ROUTES)
      ],
      schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
    });

    // create component and test fixture
    fixture = TestBed.createComponent(ToolbarComponent);

    // get test component from the fixture
    component = fixture.componentInstance;
  });

  it('should have a defined component', () => {
    expect(component).toBeDefined();
  });

  it('should have routes defined', () => {
    expect(typeof component.routes).toBe('object');
  });
});
