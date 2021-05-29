import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { RequestService } from './request.service';

const BOOK_URL = 'api/books';

@Injectable()
export class BookService {
  constructor(private requestService: RequestService) {}

  getBooks(): Observable<any> {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    };
    return this.requestService.get(BOOK_URL);
  }

  getBook(id): Observable<any> {
    return this.requestService.get(`${BOOK_URL}/${id}`);
  }

  createBook(id: any): Observable<any> {
    return this.requestService.post(`${BOOK_URL}/`, id);
  }

  updateBook(id: any): Observable<any> {
    return this.requestService.put(`${BOOK_URL}/`, id);
  }

  deleteBook(id: number): Observable<any> {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    };
    const url = `${BOOK_URL}/${id}`;
    return this.requestService.delete(url, httpOptions);
  }
}
