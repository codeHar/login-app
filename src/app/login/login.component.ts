import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MessageService } from 'primeng/api';
import { AuthService } from '../services/auth.service';
import { FormValidatorService } from '../services/form-validator.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent {
  loginForm!: FormGroup;

  constructor(
    private fb: FormBuilder,
    private _formValidatorService: FormValidatorService,
    private _authService: AuthService,
    private msgService: MessageService
  ) {}

  ngOnInit() {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required]],
    });
  }

  get f() {
    return this.loginForm.controls;
  }

  onSubmit() {
    console.log(this.loginForm.value);
    if (this.loginForm.invalid) {
      this.loginForm.markAllAsTouched();
    } else {
      this.login();
    }
  }

  async login() {
    try {
      let data: any = {
        email: this.f['email'].value,
        password: this.f['password'].value,
      };
      const res = await this._authService.login(data);
      this.loginForm.reset();
      this.msgService.add({
        severity: 'success',
        summary: 'Log In',
        detail: 'Logged In Successfully',
      });
      console.log(res);
    } catch (err) {
      console.log(err);
      this.msgService.add({
        severity: 'error',
        summary: 'Log In',
        detail: 'Logged In Failed',
      });
    }
  }

  checkControlError(controlName: string, validationType: string): boolean {
    return this._formValidatorService.controlHasError(
      this.loginForm,
      controlName,
      validationType
    );
  }
}
