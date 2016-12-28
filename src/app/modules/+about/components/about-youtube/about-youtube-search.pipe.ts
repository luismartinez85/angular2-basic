import { Pipe, PipeTransform } from '@angular/core';
/*
 * Raise the value exponentially
 * Takes an exponent argument that defaults to 1.
 * Usage:
 *   value | AboutYoutubeSearchPipe:string
 * Example:
 *   {{ string |  string}}
*/
@Pipe({name: 'aboutYoutubeSearchPipe', pure: true})

export class AboutYoutubeSearchPipe implements PipeTransform {
  transform(value: string): Array<any> {
    let array = arguments[0] || null;
    let valueString = arguments[1] || '';
    let returnArray = [];

    array && (function(){
        Array.prototype.forEach.call(array, function(){
        if (('snippet' in arguments[0]) && arguments[0].snippet.title) {
          if (~arguments[0].snippet.title.toLowerCase().indexOf(valueString.toLowerCase())) {
            returnArray.push(arguments[0]);
          }
        }
      });
    }());

    return returnArray || [''];
  }
}
