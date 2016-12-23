import { ComponentFixture, TestBed, inject } from '@angular/core/testing';
import { FsUsersService } from './fs-users.service';

describe('FeaturesService', () => {
  beforeEach(() => {
      TestBed.configureTestingModule({
        providers: [FsUsersService]
    });
  });

  it('Should return 9 techs', inject([FsUsersService], (service: FsUsersService) => {
    expect(service.search()).toBe(9);
  }));
});
