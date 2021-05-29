import {AfterViewInit, Component, Input, OnInit, ViewChild } from '@angular/core';
import { Observable } from 'rxjs';
import { map, switchMap } from 'rxjs/operators';
import { BookService } from '../services/book.service';

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.css']
})
export class BookListComponent implements OnInit {
  constructor(private bookService: BookService) {}

  filterargs = {
    id: '',
    isbn: '',
    title: '',
    author: '',
    published: '',
    pages: ''
  };

  selectedSorting = 'id';
  books$: Observable<any>;
  books;

  ngOnInit() {
    this.books$ = this.bookService.getBooks().pipe();
  }

  onDeleteBook(bookId) {
    this.bookService
      .deleteBook(bookId)
      .pipe(switchMap(res => (this.books$ = this.bookService.getBooks())))
      .subscribe();
  }

  onSort() {
    this.books$ = this.books$.pipe(
      map(books =>
        books.sort((a, b) =>
          a[this.selectedSorting] < b[this.selectedSorting] ? -1 : 1
        )
      )
    );
  }
}
