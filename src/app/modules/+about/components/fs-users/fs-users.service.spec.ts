import { async, inject, TestBed } from '@angular/core/testing';
import { BaseRequestOptions, Http, HttpModule, Response, ResponseType, ResponseOptions } from '@angular/http';
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
          useFactory: (mockBackend, options) => new Http(mockBackend, options),
          deps: [MockBackend, BaseRequestOptions]
        }
      ],
      imports: [
        HttpModule
      ]
    });
  });

  it('should be defined', inject(
    [FsUsersService, MockBackend], (service, mockBackend) => {
      expect(service).toBeDefined();
  }));

  it('should search and return users mock', inject(
    [FsUsersService, MockBackend], (service, mockBackend) => {

    mockBackend.connections.subscribe(connection => {
      connection.mockRespond(new Response(new ResponseOptions({
        body: usersJSONMock
      })));
    });

    const result = service.search();

    result.subscribe(
      res => {
        expect(res.users[0].name).toEqual(usersJSONMock.users[0].name);
      }
    );
  }));
/*
  it('should search and return users mock', inject(
    [FsUsersService, MockBackend], (service, mockBackend) => {

    mockBackend.connections.subscribe(connection => {
      connection.mockError(new Error('Error'));
    });

    const result = service.search();

    result.subscribe(
      res => {
        expect(res.users[0].name).toEqual(usersJSONMock.users[0].name);
      }
    );

  }));
 */ 
});