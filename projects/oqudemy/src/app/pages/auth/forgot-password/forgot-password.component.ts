import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.scss']
})
export class ForgotPasswordComponent implements OnInit {

  loginForm: any = this.formBuilder.group({
    email: ['', [Validators.required, Validators.email]],
  });

  isInvalidEmail = false;

  constructor(private formBuilder: FormBuilder, private router: Router) { }

  ngOnInit(): void {
  }

  get email() {
    return this.loginForm.get('email')
  }

  submit() {
    this.isInvalidEmail = false;
    console.log(this.loginForm);

    if (!this.loginForm.valid) {
      return;
    }

    if (this.email.value === 'hello@gmail.com') {
      this.router.navigate(['/auth/reset-password']);
    } else {
      this.isInvalidEmail = true;
    }
  }

}
