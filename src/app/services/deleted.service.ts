import { HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { RequestService } from './request.service';

const DELETED_URL = 'api/deleted';
const AUTHOR_URL = 'api/authors';

@Injectable()
export class DeletedService {
  constructor(private requestService: RequestService) {}

  getDeleted(): Observable<any> {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    };
    return this.requestService.get(DELETED_URL, httpOptions);
  }

  createDeleted(deleted: any): Observable<any> {
    return this.requestService.post(`${DELETED_URL}/`, deleted);
  }

  undoDeleted(deleted: any): Observable<any> {
    return this.requestService.post(`${AUTHOR_URL}/`, deleted);
  }
}
