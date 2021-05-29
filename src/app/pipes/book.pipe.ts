import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'bookfilter',
  pure: false
})
export class BookFilterPipe implements PipeTransform {
  transform(items: any[], filter): any {
    if (!items || !filter) {
      return items;
    }
    return items.filter(
      item =>
        item.id.toString().indexOf(filter.id) !== -1 &&
        item.ISBN.toString().indexOf(filter.isbn) !== -1 &&
        item.title.indexOf(filter.title) !== -1 &&
        item.author.indexOf(filter.author) !== -1 &&
        item.published.toString().indexOf(filter.published) !== -1 &&
        item.pages.toString().indexOf(filter.pages) !== -1
    );
  }
}
