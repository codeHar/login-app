import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { first, firstValueFrom } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  constructor(private http: HttpClient) {}

  login(data: any) {
    return firstValueFrom(
      this.http.get('https://jsonplaceholder.typicode.com/posts/1')
    );
  }

  register(data: any) {
    return firstValueFrom(
      this.http.post('https://jsonplaceholder.typicode.com/posts', data)
    );
  }
}
