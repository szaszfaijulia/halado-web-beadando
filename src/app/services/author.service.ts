import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { RequestService } from './request.service';

const AUTHOR_URL = 'api/authors';

@Injectable()
export class AuthorService {
  constructor(private requestService: RequestService) {}

  getAuthors(): Observable<any> {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    };
    return this.requestService.get(AUTHOR_URL, httpOptions);
  }

  getAuthor(id): Observable<any> {
    return this.requestService.get(`${AUTHOR_URL}/${id}`);
  }

  createAuthor(id: any): Observable<any> {
    return this.requestService.post(`${AUTHOR_URL}/`, id);
  }

  updateAuthor(id: any): Observable<any> {
    return this.requestService.put(`${AUTHOR_URL}/`, id);
  }

  deleteAuthor(id: number): Observable<any> {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    };
    const url = `${AUTHOR_URL}/${id}`;
    return this.requestService.delete(url, httpOptions);
  }
}
