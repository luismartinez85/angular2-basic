import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NoContentComponent } from './no-content.component.ts';

let fixture:    ComponentFixture<NoContentComponent>;
let component:  NoContentComponent;

describe('no-content Component', () => {
   beforeEach(done => {
    // refine the test module by declaring the test component
    TestBed.configureTestingModule({
      declarations: [ NoContentComponent ],
    });

    // create component and test fixture
    fixture = TestBed.createComponent(NoContentComponent);

    // get test component from the fixture
    component = fixture.componentInstance;
  });

  it('should have a defined component', () => {
    expect(component).toBeDefined();
  });
})