import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { first, firstValueFrom } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  headers = new HttpHeaders().set(
    'x-access-token',
    localStorage.getItem('user')!
  );

  constructor(private http: HttpClient) {}

  login(data: any) {
    return firstValueFrom(
      this.http.post('http://localhost:8080/api/auth/signin', data)
    );
  }

  register(data: any) {
    return firstValueFrom(
      this.http.post('http://localhost:8080/api/auth/signup', data)
    );
  }

  getAllData() {
    return firstValueFrom(
      this.http.get('https://jsonplaceholder.typicode.com/posts/1', {
        headers: this.headers,
      })
    );
  }

  getModeratorData() {
    return firstValueFrom(
      this.http.get('https://jsonplaceholder.typicode.com/posts/1', {
        headers: this.headers,
      })
    );
  }

  getUserData() {
    return firstValueFrom(
      this.http.get('https://jsonplaceholder.typicode.com/posts/1', {
        headers: this.headers,
      })
    );
  }

  getAdminData() {
    return firstValueFrom(
      this.http.get('https://jsonplaceholder.typicode.com/posts/1', {
        headers: this.headers,
      })
    );
  }
}
