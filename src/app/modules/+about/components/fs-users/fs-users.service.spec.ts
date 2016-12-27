/*
import {BaseRequestOptions, Http} from '@angular/http';
import {MockBackend} from '@angular/http/testing';

it('should get some data', inject([AsyncTestCompleter], (async) => {
  var connection;
  var injector = Injector.resolveAndCreate([
    MockBackend,
    {provide: Http, useFactory: (backend, options) => {
      return new Http(backend, options);
    }, deps: [MockBackend, BaseRequestOptions]}]);
  var http = injector.get(Http);
  var backend = injector.get(MockBackend);
  //Assign any newly-created connection to local variable
  backend.connections.subscribe(c => connection = c);
  http.request('data.json').subscribe((res) => {
    expect(res.text()).toBe('awesome');
    async.done();
  });
  connection.mockRespond(new Response('awesome'));
}));
*/