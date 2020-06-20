import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export class TodoService {
  constructor(private http: HttpClient) {}

  add(todo): Observable<any[]> {
    return this.http.post<any[]>('...', todo);
  }

  getTodos(): Observable<any[]> {
    return this.http.get<any[]>('...');
  }

  delete(id) {
    return this.http.delete('...');
  }
}
