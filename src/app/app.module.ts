import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { environment } from '../environments/environment';
import { RequestService } from './services/request.service';
import { InMemoryBookService } from './in-memory-book.service';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { BookstoreListComponent } from './bookstore-list/bookstore-list.component';
import { BookListComponent } from './book-list/book-list.component';
import { BookDetailsComponent } from './book-details/book-details.component';
import { BookService } from './services/book.service';
import { BookCreateComponent } from './book-create/book-create.component';
import { AuthorService } from './services/author.service';
import { AuthorListComponent } from './author-list/author-list.component';
import { MatSortModule } from '@angular/material/sort';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { BookFilterPipe } from './pipes/book.pipe';
import { BookEditComponent } from './book-edit/book-edit.component';
import { BookstoreService } from './services/bookstore.service';
import { AuthorCreateComponent } from './author-create/author-create.component';
import { AuthorEditComponent } from './author-edit/author-edit.component';
import { BookstoreEditComponent } from './bookstore-edit/bookstore-edit.component';
import { BookstoreCreateComponent } from './bookstore-create/bookstore-create.component';
import { AuthorFilterPipe } from './pipes/author.pipe';
import { BookstoreFilterPipe } from './pipes/store.pipe';
import { DeletedService } from './services/deleted.service';
import { AuthorDeletedComponent } from './author-deleted/author-deleted.component';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    HttpClientModule,
    environment.isMockEnabled
      ? HttpClientInMemoryWebApiModule.forRoot(InMemoryBookService)
      : [],
    RouterModule.forRoot([
      { path: '', component: BookListComponent },
      { path: 'books', component: BookListComponent },
      { path: 'books/:bookId', component: BookDetailsComponent },
      { path: 'createbook', component: BookCreateComponent },
      { path: 'editbook/:bookId', component: BookEditComponent },
      { path: 'authors', component: AuthorListComponent },
      { path: 'createauthor', component: AuthorCreateComponent },
      { path: 'editauthor/:authorId', component: AuthorEditComponent },
      { path: 'bookstores', component: BookstoreListComponent },
      { path: 'createbookstore', component: BookstoreCreateComponent },
      { path: 'editbookstore/:bookstoreId', component: BookstoreEditComponent },
      { path: 'deleted', component: AuthorDeletedComponent }
      /*{ path: '', component: EventListComponent },
      { path: 'events', component: EventListComponent },
      { path: 'events/:eventId', component: EventDetailsComponent },
      { path: 'create', component: EventCreateComponent }*/
    ]),
    ReactiveFormsModule,
    MatButtonModule,
    MatCardModule,
    MatIconModule,
    MatInputModule,
    MatProgressSpinnerModule,
    MatSortModule,
    MatButtonToggleModule /*,
		MatMenuModule,
		MatSelectModule,
		MatTableModule,
		MatAutocompleteModule,
		MatRadioModule,
		MatNativeDateModule,
		MatProgressBarModule,
		MatDatepickerModule,
		MatCardModule,
		MatPaginatorModule,
		MatCheckboxModule,
		MatSnackBarModule,
		MatExpansionModule,
		MatTabsModule,
		MatTooltipModule,
		MatDialogModule,
    MatDividerModule*/
  ],
  declarations: [
    AppComponent,
    HelloComponent,
    BookListComponent,
    BookDetailsComponent,
    BookCreateComponent,
    AuthorListComponent,
    BookFilterPipe,
    BookEditComponent,
    BookstoreListComponent,
    AuthorCreateComponent,
    AuthorEditComponent,
    BookstoreEditComponent,
    BookstoreCreateComponent,
    AuthorFilterPipe,
    BookstoreFilterPipe,
    AuthorDeletedComponent/*,
    EventListComponent,
    EventSocialComponent,
    EventDetailsComponent,
    EventCreateComponent,
    HighlightDirective,
    FirstLetterPipe*/
  ],
  bootstrap: [AppComponent],
  providers: [
    InMemoryBookService,
    RequestService,
    BookService,
    AuthorService,
    RequestService,
    BookstoreService,
    DeletedService
  ]
})
export class AppModule {}
