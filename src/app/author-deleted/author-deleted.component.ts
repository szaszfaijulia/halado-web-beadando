import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { AuthorService } from '../services/author.service';
import { DeletedService } from '../services/deleted.service';

@Component({
  selector: 'app-author-deleted',
  templateUrl: './author-deleted.component.html',
  styleUrls: ['./author-deleted.component.css']
})
export class AuthorDeletedComponent implements OnInit {
  //DeletedAuthorsComponent

  constructor(
    private authorService: AuthorService,
    private deletedService: DeletedService,
    private router: Router
  ) {}

  deleted$: Observable<any>;
  restoredAuthor;

  ngOnInit() {
    this.deleted$ = this.deletedService.getDeleted();
  }

  onUndo(name) {
    this.deletedService
      .getDeleted()
      .pipe(map(dels => dels.filter(deleted => deleted.name === name)))
      .subscribe(result => {
        this.restoredAuthor = result;
        this.authorService.createAuthor(this.restoredAuthor[0]).subscribe();
        this.router.navigate(['/authors']);
      });
  }
}
