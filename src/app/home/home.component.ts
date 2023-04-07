import { Component } from '@angular/core';
import { MessageService } from 'primeng/api';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent {
  menus: IMenu[] = [
    {
      name: 'All Users',
      action: () => this.getAllData(),
    },
    {
      name: 'Moderator',
      action: () => this.getModeratorData(),
    },
    {
      name: 'User',
      action: () => this.getUserData(),
    },
    {
      name: 'Admin',
      action: () => this.getAdminData(),
    },
  ];

  data: any = 'this is data for all users';

  constructor(
    private _authService: AuthService,
    private msgService: MessageService
  ) {}

  ngOnInit() {
    this.getAllData();
  }

  async getAllData() {
    try {
      this.data='this is data for all users';
      // this.data = await this._authService.getAllData();
    } catch (err) {
      console.log(err);
      this.msgService.add({
        severity: 'error',
        summary: 'Error',
        detail: 'Failed to get all data',
      });
    }
  }

  async getModeratorData() {
    try {
      this.data = 'this is data for moderator only';
      // this.data=await this._authService.getModeratorData()
    } catch (err) {
      console.log(err);
      this.msgService.add({
        severity: 'error',
        summary: 'Error',
        detail: 'Resource is not available for this role',
      });
    }
  }

  async getUserData() {
    try {
      this.data = 'this is data for user only';
      // this.data=await this._authService.getModeratorData()
    } catch (err) {
      console.log(err);
      this.msgService.add({
        severity: 'error',
        summary: 'Error',
        detail: 'Resource is not available for this role',
      });
    }
  }

  async getAdminData() {
    try {
      this.data = 'this is data for admin only';
      // this.data=await this._authService.getModeratorData()
    } catch (err) {
      console.log(err);
      this.msgService.add({
        severity: 'error',
        summary: 'Error',
        detail: 'Resource is not available for this role',
      });
    }
  }
}

interface IMenu {
  name: string;
  action: any;
}
