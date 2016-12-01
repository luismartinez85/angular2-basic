import {
  inject,
  TestBed
} from '@angular/core/testing';

// Load the implementations that should be tested
import { ShellComponent } from './shell.component';

describe('App Shell', () => {
  // provide our implementations or mocks to the dependency injector
  beforeEach(() => TestBed.configureTestingModule({
    providers: [
      ShellComponent
    ]}));

  it('should have a url', inject([ ShellComponent ], (appShell: ShellComponent) => {
    expect(appShell.title).toEqual('Hello');
  }));

});
