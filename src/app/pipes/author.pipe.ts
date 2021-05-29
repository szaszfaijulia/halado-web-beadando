import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'authorfilter',
  pure: false
})
export class AuthorFilterPipe implements PipeTransform {
  transform(items: any[], filter): any {
    if (!items || !filter) {
      return items;
    }
    return items.filter(
      item =>
        item.id.toString().indexOf(filter.id) !== -1 &&
        item.name.indexOf(filter.name) !== -1 &&
        item.birth.toString().indexOf(filter.birth) !== -1 &&
        item.nationality.indexOf(filter.nationality) !== -1
    );
  }
}
