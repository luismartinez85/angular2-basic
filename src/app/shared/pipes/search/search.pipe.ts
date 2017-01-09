import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'searchPipe',
  pure: false
})
export class SearchPipe implements PipeTransform {
  transform(data: any[], searchTerm: string, key: string): any[] {
    if (!data || searchTerm === ''){
      return data;
    }

    searchTerm = searchTerm.toLowerCase();
    return data.filter(item => {
      if (!item[key]){
        return;
      }
      return item[key].toLowerCase().indexOf(searchTerm) !== -1;
    });
  }
}
