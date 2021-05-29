import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthorService } from '../services/author.service';
import { BookService } from '../services/book.service';

@Component({
  selector: 'app-book-edit',
  templateUrl: './book-edit.component.html',
  styleUrls: ['./book-edit.component.css']
})
export class BookEditComponent implements OnInit {
  constructor(
    private bookService: BookService,
    private authorService: AuthorService,
    private router: Router,
    private route: ActivatedRoute,
    private formBuilder: FormBuilder
  ) {}

  bookForm: FormGroup;
  selectedAuthor: string;
  book$: Observable<any>;
  book;
  newBookId;
  authors$: Observable<any>;

  ngOnInit() {
    this.bookForm = this.formBuilder.group({
      bookId: '',
      ISBN: '',
      title: '',
      author: '',
      published: '',
      pages: ''
    });
    this.authors$ = this.authorService.getAuthors();

    this.route.paramMap.subscribe(params => {
      this.bookService.getBook(+params.get('bookId')).subscribe(result => {
        this.book = result;
        this.selectedAuthor = result.author;
        this.bookForm = this.formBuilder.group({
          id: this.book.id,
          ISBN: this.book.ISBN,
          title: this.book.title,
          author: this.book.author,
          published: this.book.published,
          pages: this.book.pages
        });
      });
    });
  }

  onSubmit(bookData) {
    bookData.author = this.selectedAuthor;
    this.bookService.updateBook(bookData).subscribe(res => {
      this.bookForm.reset();
      this.router.navigate(['/books']);
    });
  }
}
