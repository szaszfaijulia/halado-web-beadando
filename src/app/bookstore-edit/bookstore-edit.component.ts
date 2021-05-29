import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { BookService } from '../services/book.service';
import { BookstoreService } from '../services/bookstore.service';

@Component({
  selector: 'app-bookstore-edit',
  templateUrl: './bookstore-edit.component.html',
  styleUrls: ['./bookstore-edit.component.css']
})
export class BookstoreEditComponent implements OnInit {
  constructor(
    private bookService: BookService,
    private bookstoreService: BookstoreService,
    private router: Router,
    private route: ActivatedRoute,
    private formBuilder: FormBuilder
  ) {}

  bookstoreForm: FormGroup;

  ngOnInit() {
    this.bookstoreForm = this.formBuilder.group({
      id: '',
      name: '',
      city: '',
      zip: '',
      address: '',
      open: ''
    });

    this.route.paramMap.subscribe(params => {
      this.bookstoreService
        .getBookstore(+params.get('bookstoreId'))
        .subscribe(result => {
          this.bookstoreForm = this.formBuilder.group({
            id: result.id,
            name: result.name,
            city: result.city,
            zip: result.zip,
            address: result.address,
            open: result.open
          });
        });
    });
  }

  onSubmit(bookstoreData) {
    this.bookstoreService.updateBookstore(bookstoreData).subscribe(res => {
      this.bookstoreForm.reset();
      this.router.navigate(['/bookstores']);
    });
  }
}
