import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class TodoService {
  constructor(private http: HttpClient) {}

  add(todo): Observable<any> {
    return this.http.post<any>('...', todo);
  }

  getTodos(): Observable<any[]> {
    return this.http.get<any[]>('...');
  }

  getTodosPromise(): Promise<any[]> {
    return this.http.get<any[]>('...').toPromise();
  }

  delete(id) {
    return this.http.delete('...');
  }
}
