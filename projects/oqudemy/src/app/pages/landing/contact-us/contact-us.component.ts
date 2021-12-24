import { animate, style, transition, trigger } from '@angular/animations';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.scss'],
  animations: [
    trigger(
      'inOutAnimation', 
      [
        transition(
          ':enter', 
          [
            style({ height: 0, opacity: 0 }),
            animate('400ms ease-out', 
                    style({ height: 52, opacity: 1 }))
          ]
        ),
        transition(
          ':leave', 
          [
            style({ height: 52, opacity: 1 }),
            animate('400ms ease-in', 
                    style({ height: 0, opacity: 0 }))
          ]
        )
      ]
    )
  ]
})
export class ContactUsComponent implements OnInit {

  contactForm: any = this.formBuilder.group({
    email: ['', [Validators.required, Validators.email]],
    message: ['', Validators.required]
  });

  constructor(private formBuilder: FormBuilder, private router: Router) { }

  showSuccess = false;
  ngOnInit(): void {
  }

  get email() {
    return this.contactForm.get('email')
  }

  get message() {
    return this.contactForm.get('message');
  }

  submit() {
    if (!this.contactForm.valid) {
      return;
    }

    this.showSuccess = true;
    this.contactForm.reset();
  }

}
