import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { MessageService } from 'primeng/api';
import { AuthService } from '../services/auth.service';
import { FormValidatorService } from '../services/form-validator.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent {
  loginForm!: FormGroup;

  roles = ['User', 'Moderator', 'Admin'];

  constructor(
    private fb: FormBuilder,
    private _formValidatorService: FormValidatorService,
    private _authService: AuthService,
    private msgService: MessageService,
    private _router: Router
  ) {}

  ngOnInit() {
    this.loginForm = this.fb.group({
      username: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(5)]],
      roles: ['User', Validators.required],
      recaptcha: ['', Validators.required],
    });
  }

  get f() {
    return this.loginForm.controls;
  }

  onSubmit() {
    console.log(this.loginForm.value);
    this.register();
  }

  async register() {
    try {
      let data: any = {
        username: this.f['username'].value,
        email: this.f['email'].value,
        password: this.f['password'].value,
        roles: [String(this.f['roles'].value).toLowerCase()],
      };

      let res = await this._authService.register(data);
      this.loginForm.reset();
      this.msgService.add({
        severity: 'success',
        summary: 'Register',
        detail: 'User registered successfully',
      });
      this._router.navigate(['/login']);
    } catch (err) {
      console.log(err);
      this.msgService.add({
        severity: 'error',
        summary: 'Register',
        detail: 'User failed to register',
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
