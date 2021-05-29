import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthorService } from '../services/author.service';
import { BookService } from '../services/book.service';

@Component({
  selector: 'app-book-create',
  templateUrl: './book-create.component.html',
  styleUrls: ['./book-create.component.css']
})
export class BookCreateComponent implements OnInit {
  bookForm: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private bookService: BookService,
    private authorService: AuthorService,
    private router: Router
  ) {}

  selectedAuthor: string;
  books$: Observable<any>;
  newBookId;
  authors$: Observable<any>;

  ngOnInit() {
    this.authors$ = this.authorService.getAuthors();

    this.books$ = this.bookService.getBooks();
    this.books$.subscribe(result => {
      this.newBookId = result.length + 1;
    });

    this.bookForm = this.formBuilder.group({
      title: '',
      author: '',
      published: '',
      pages: '',
      ISBN: ''
    });
  }

  onSubmit(bookData) {
    bookData.id = this.newBookId;
    bookData.author = this.selectedAuthor;
    this.bookService.createBook(bookData).subscribe(res => {
      this.bookForm.reset();
      this.router.navigate(['/books']);
    });
  }
}
