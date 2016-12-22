import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FsDialogComponent } from './fs-dialog.component';


let component:  FsDialogComponent;
let fixture:    ComponentFixture<FsDialogComponent>;

describe('FsDialog Component', () => {
   beforeEach(() => {
    // refine the test module by declaring the test component
    TestBed.configureTestingModule({
      declarations: [ FsDialogComponent ],
    }).compileComponents();

    // create component and test fixture
    fixture = TestBed.createComponent(FsDialogComponent);

    // get test component from the fixture
    component = fixture.componentInstance;
  });

  it('should be defined', () => {
     expect(component).toBeDefined();
  });
})
