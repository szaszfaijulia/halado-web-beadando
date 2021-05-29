import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { map, switchMap } from 'rxjs/operators';
import { BookstoreService } from '../services/bookstore.service';

@Component({
  selector: 'app-bookstore-list',
  templateUrl: './bookstore-list.component.html',
  styleUrls: ['./bookstore-list.component.css']
})
export class BookstoreListComponent implements OnInit {
  constructor(private bookstoreService: BookstoreService) {}

  filterargs = {
    id: '',
    name: '',
    city: '',
    zip: '',
    address: '',
    open: ''
  };

  selectedSorting = 'id';
  bookstores$: Observable<any>;
  bookstores;

  ngOnInit() {
    this.bookstores$ = this.bookstoreService.getBookstores();
  }

  onDeleteBookstore(id) {
    this.bookstoreService
      .deleteBookstore(id)
      .pipe(
        switchMap(
          res => (this.bookstores$ = this.bookstoreService.getBookstores())
        )
      )
      .subscribe();
  }

  onSort() {
    this.bookstores$ = this.bookstores$.pipe(
      map(bookstores =>
        bookstores.sort((a, b) =>
          a[this.selectedSorting] < b[this.selectedSorting] ? -1 : 1
        )
      )
    );
  }
}
