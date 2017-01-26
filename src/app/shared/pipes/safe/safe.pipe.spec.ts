import { SafePipe } from './safe.pipe';
import { DomSanitizer } from '@angular/platform-browser';
import { inject } from '@angular/core/testing';

describe('Shared -> Pipes -> Safe Pipe', inject([DomSanitizer], (domSanitizer) => {
  let pipe = new SafePipe(domSanitizer);

  let url ="http://serenity.com";
  it('should return null data', () => {
    expect(pipe.transform(url)).toBe('http://serenity.com');
  });
}));
