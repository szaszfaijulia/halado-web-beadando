import { HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { RequestService } from './request.service';

const BOOKSTORE_URL = 'api/bookstores';

@Injectable()
export class BookstoreService {
  constructor(private requestService: RequestService) {}

  getBookstores(): Observable<any> {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    };
    return this.requestService.get(BOOKSTORE_URL, httpOptions);
  }

  getBookstore(id): Observable<any> {
    return this.requestService.get(`${BOOKSTORE_URL}/${id}`);
  }

  createBookstore(id: any): Observable<any> {
    return this.requestService.post(`${BOOKSTORE_URL}/`, id);
  }

  updateBookstore(id: any): Observable<any> {
    return this.requestService.put(`${BOOKSTORE_URL}/`, id);
  }

  deleteBookstore(id: number): Observable<any> {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    };
    const url = `${BOOKSTORE_URL}/${id}`;
    return this.requestService.delete(url, httpOptions);
  }
}
