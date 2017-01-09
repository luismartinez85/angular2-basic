import { TestBed } from '@angular/core/testing';
import 'hammerjs';

import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { MaterialModule, MdDialog } from '@angular/material';
import { SharedModule } from '../../../../shared/shared.module';

import { HomeFeaturesComponent } from './home-features.component';

describe('Modules -> home -> HomeFeatureComponent', () => {
  let component: HomeFeaturesComponent;
  let fixture;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        MaterialModule.forRoot(),
        SharedModule
      ],
      declarations: [ HomeFeaturesComponent ],
      schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
    })
    .compileComponents(); // compile template and css

    fixture = TestBed.createComponent(HomeFeaturesComponent);
    component = fixture.componentInstance;

    spyOn(MdDialog.prototype, 'open').and.returnValue(true);

  });

  it('should have a defined component', () => {
    expect(component).toBeDefined();
  });


  it('should open dialog', () => {
    let element = {
      title: 'title1',
      description: 'description1'
    };
    let dialog = component.openDialog(element);
    expect(dialog).toEqual(true);
  });
});
