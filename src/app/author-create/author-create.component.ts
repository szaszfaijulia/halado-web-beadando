import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthorService } from '../services/author.service';

@Component({
  selector: 'app-author-create',
  templateUrl: './author-create.component.html',
  styleUrls: ['./author-create.component.css']
})
export class AuthorCreateComponent implements OnInit {
  authorForm: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private authorService: AuthorService,
    private router: Router
  ) {}

  authors$: Observable<any>;
  newAuthorId;

  ngOnInit() {
    this.authors$ = this.authorService.getAuthors();
    this.authors$.subscribe(result => {
      this.newAuthorId = result.length + 1;
    });

    this.authorForm = this.formBuilder.group({
      id: '',
      name: '',
      birth: '',
      nationality: ''
    });
  }

  onSubmit(authorData) {
    authorData.id = this.newAuthorId;
    this.authorService.createAuthor(authorData).subscribe(res => {
      this.authorForm.reset();
      this.router.navigate(['/authors']);
    });
  }
}
