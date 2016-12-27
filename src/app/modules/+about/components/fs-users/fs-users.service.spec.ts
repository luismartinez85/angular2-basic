import { async, inject, TestBed } from '@angular/core/testing';
import { BaseRequestOptions, Http, HttpModule, Response, ResponseOptions } from '@angular/http';
import { MockBackend } from '@angular/http/testing';

import { FsUsersService } from './fs-users.service';

let usersJSONMock = {
  "users" : [{
      "name": "David Chavarri",
      "job": "Front Architect",
      "image": "/assets/img/team/david-min.jpg",
      "description": "React Ninja",
      "github": "https://github.com/DvdChavarri"
    }]
};

describe('Modules -> About -> FsUsersService', () => {

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        FsUsersService,

        MockBackend,
        BaseRequestOptions,
        {
          provide: Http,
          useFactory: (backend, options) => new Http(backend, options),
          deps: [MockBackend, BaseRequestOptions]
        }
      ],
      imports: [
        HttpModule
      ]
    });
  });

  it('should be defined', async(inject(
    [FsUsersService, MockBackend], (service, mockBackend) => {
      expect(service).toBeDefined();
  })));

  it('should search and return users mock', async(inject(
    [FsUsersService, MockBackend], (service, mockBackend) => {

    mockBackend.connections.subscribe(conn => {
      conn.mockRespond(new Response(new ResponseOptions({ body: usersJSONMock })));
    });

    const result = service.search();

    result.subscribe(res => {
      expect(res).toEqual(usersJSONMock);
    });
  })));



});
