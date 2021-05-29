import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'bookstorefilter',
  pure: false
})
export class BookstoreFilterPipe implements PipeTransform {
  transform(items: any[], filter): any {
    if (!items || !filter) {
      return items;
    }
    return items.filter(
      item =>
        item.id.toString().indexOf(filter.id) !== -1 &&
        item.name.indexOf(filter.name) !== -1 &&
        item.city.indexOf(filter.city) !== -1 &&
        item.zip.indexOf(filter.zip) !== -1 &&
        item.address.indexOf(filter.address) !== -1 &&
        item.open.indexOf(filter.open) !== -1
    );
  }
}
