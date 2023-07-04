import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent {
  title = 'School Management System - School Name';
  footer = 'Developed by: Kajamohan K';
  hide = true;

  loginForm!: any;

  constructor(private fb: FormBuilder, private router: Router) {}

  ngOnInit(): void {
    console.log('LoginComponent.ngOnInit()');

    this.loginForm = this.fb.group({
      username: [''],
      password: [''],
    });
  }

  login() {
    console.log(this.loginForm.value);
    this.router.navigate(['/dashboard']);
  }
}
