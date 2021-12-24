import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../../core/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginForm: any = this.formBuilder.group({
    email: ['', [Validators.required, Validators.email]],
    password: ['', Validators.required]
  });

  isInvalidPassword = false;

  constructor(private formBuilder: FormBuilder, private router: Router, private authService: AuthService) { }

  ngOnInit(): void {
  }

  get email() {
    return this.loginForm.get('email')
  }

  get password() {
    return this.loginForm.get('password');
  }

  submit() {
    this.isInvalidPassword = false;

    if (!this.loginForm.valid) {
      return;
    }

    if (this.authService.login(this.email.value, this.password.value) !== null) {
      this.router.navigate(['/dashboard']);
    } else {
      this.isInvalidPassword = true;
    }
  }

}
