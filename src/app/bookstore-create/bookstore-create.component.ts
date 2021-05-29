import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { BookstoreService } from '../services/bookstore.service';

@Component({
  selector: 'app-bookstore-create',
  templateUrl: './bookstore-create.component.html',
  styleUrls: ['./bookstore-create.component.css']
})
export class BookstoreCreateComponent implements OnInit {
  bookstoreForm: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private bookstoreService: BookstoreService,
    private router: Router
  ) {}

  bookstores$: any;
  newBookstoreId;

  ngOnInit() {
    this.bookstores$ = this.bookstoreService.getBookstores();
    this.bookstores$.subscribe(result => {
      this.newBookstoreId = result.length + 1;
    });

    this.bookstoreForm = this.formBuilder.group({
      id: '',
      name: '',
      city: '',
      zip: '',
      address: '',
      open: ''
    });
  }

  onSubmit(bookstoreData) {
    bookstoreData.id = this.newBookstoreId;
    this.bookstoreService.createBookstore(bookstoreData).subscribe(res => {
      this.bookstoreForm.reset();
      this.router.navigate(['/bookstores']);
    });
  }
}
