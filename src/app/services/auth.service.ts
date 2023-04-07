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
        const res: any = await this.apiService.login(data);
        if (res.status == 200) {
          localStorage.setItem('user', res.body);
          resolve(res);
        } else {
          throw new Error(res?.body);
        }
      } catch (err: any) {
        reject(err.message || 'Error');
      }
    });
  }

  register(data: any) {
    return new Promise(async (resolve, reject) => {
      try {
        const res: any = await this.apiService.register(data);
        resolve(res);
      } catch (err) {
        reject(err);
      }
    });
  }

  getAllData() {
    return new Promise(async (resolve, reject) => {
      try {
        const res: any = await this.apiService.getAllData();
        resolve(res);
      } catch (err) {
        reject(err);
      }
    });
  }

  getModeratorData() {
    return new Promise(async (resolve, reject) => {
      try {
        const res: any = await this.apiService.getModeratorData();
        resolve(res);
      } catch (err) {
        reject(err);
      }
    });
  }

  getUserData() {
    return new Promise(async (resolve, reject) => {
      try {
        const res: any = await this.apiService.getUserData();
        resolve(res);
      } catch (err) {
        reject(err);
      }
    });
  }

  getAdminData() {
    return new Promise(async (resolve, reject) => {
      try {
        const res: any = await this.apiService.getAdminData();
        resolve(res);
      } catch (err) {
        reject(err);
      }
    });
  }
}
