import { Injectable } from '@angular/core';
import { ApiService } from './api.service';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private apiService: ApiService) {}

  login(data: any) {
    return new Promise(async (resolve, reject) => {
      try {
        const res = this.apiService.login(data);
        resolve(res);
      } catch (err) {
        reject(err);
      }
    });
  }

  register(data: any) {
    return new Promise(async (resolve, reject) => {
      try {
        const res = this.apiService.register(data);
        resolve(res);
      } catch (err) {
        reject(err);
      }
    });
  }
}
