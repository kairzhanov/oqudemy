import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { ComponentCanDeactivate } from '../../../core/guards/exit.guard';
import { AuthService } from '../../../core/services/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit, ComponentCanDeactivate {

  registerForm: any = this.formBuilder.group({
    email: ['', [Validators.required, Validators.email]],
    name: ['', Validators.required],
    password: ['', Validators.required],
    repeatPassword: ['', [Validators.required]]
  });

  isInvalidPassword = false;
  saved: boolean = false;

  constructor(private formBuilder: FormBuilder, private router: Router, private authService: AuthService) { }
  canDeactivate(): boolean | Observable<boolean> {
    if (!this.saved) {
      return confirm("Вы точно хотите покинуть страницу?");
    } else {
      return true;
    }
  }

  ngOnInit(): void {
  }

  get email() {
    return this.registerForm.get('email')
  }

  get password() {
    return this.registerForm.get('password');
  }

  get name() {
    return this.registerForm.get('name');
  }

  get repeatPassword() {
    return this.registerForm.get('repeatPassword');
  }
 
  submit() {
    this.isInvalidPassword = false;
    this.saved = true;

    if (!this.registerForm.valid) {
      return;
    }

    if (this.repeatPassword.value !== this.password.value) {
      this.isInvalidPassword = true;
      return;
    }

    this.authService.register(this.email.value, this.password.value, this.name.value);
    this.router.navigate(['/dashboard']);
  }
}
