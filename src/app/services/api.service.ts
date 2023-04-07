import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { first, firstValueFrom } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
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
    let headers = new HttpHeaders().set(
      'x-access-token',
      localStorage.getItem('user')!
    );
    return firstValueFrom(
      this.http.get('http://localhost:8080/api/test/all', {
        headers: headers,
      })
    );
  }

  getModeratorData() {
    let headers = new HttpHeaders().set(
      'x-access-token',
      localStorage.getItem('user')!
    );
    return firstValueFrom(
      this.http.get('http://localhost:8080/api/test/mod', {
        headers: headers,
      })
    );
  }

  getUserData() {
    let headers = new HttpHeaders().set(
      'x-access-token',
      localStorage.getItem('user')!
    );
    return firstValueFrom(
      this.http.get('http://localhost:8080/api/test/user', {
        headers: headers,
      })
    );
  }

  getAdminData() {
    let headers = new HttpHeaders().set(
      'x-access-token',
      localStorage.getItem('user')!
    );
    return firstValueFrom(
      this.http.get('http://localhost:8080/api/test/admin', {
        headers: headers,
      })
    );
  }
}
