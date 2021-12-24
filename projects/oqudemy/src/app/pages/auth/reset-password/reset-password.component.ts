import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password.component.html',
  styleUrls: ['./reset-password.component.scss']
})
export class ResetPasswordComponent implements OnInit {

  resetPasswordForm: any = this.formBuilder.group({
    password: ['', Validators.required],
    newPassword: ['', Validators.required],
    repeatPassword: ['', [Validators.required]]
  });

  isInvalidPassword = false;

  constructor(private formBuilder: FormBuilder, private router: Router) { }

  ngOnInit(): void {
  }

  get password() {
    return this.resetPasswordForm.get('password');
  }

  get newPassword() {
    return this.resetPasswordForm.get('newPassword');
  }

  get repeatPassword() {
    return this.resetPasswordForm.get('repeatPassword');
  }
 
  submit() {
    this.isInvalidPassword = false;

    if (!this.resetPasswordForm.valid) {
      return;
    }

    if (this.repeatPassword.value !== this.newPassword.value) {
      this.isInvalidPassword = true;
      return;
    }

    this.router.navigate(['/dashboard']);
  }

}
