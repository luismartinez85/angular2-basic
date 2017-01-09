import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'searchPipe',
  pure: false
})
export class SearchPipe implements PipeTransform {
  transform(data: any[], searchText: string, key: string): any[] {
    if (!data || searchText === ''){
      return data;
    }

    searchText = searchText.toLowerCase();
    return data.filter(item => {
      if (!item[key]){
        return;
      }
      return item[key].toLowerCase().indexOf(searchText) !== -1;
    });
  }
}
