import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormsModule, ReactiveFormsModule, FormControl, AbstractControl } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from './auth.service';
import { NgClass } from '@angular/common';
import { UserLoginForm } from '../_interfaces/user-login-form';

@Component({
  selector: 'dl-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  standalone: true,
  imports: [FormsModule, ReactiveFormsModule, NgClass]
})
export class LoginComponent implements OnInit {
  loginForm!: FormGroup<UserLoginForm>;
  loading: boolean = false;
  submitted: boolean = false;
  returnUrl!: string;
  errorMessage: string = '';

  constructor(private fb: FormBuilder, private route: ActivatedRoute,
    private router: Router, private authService: AuthService) {
    if (this.authService.userValue) {
      //if the user authenticated go to homepage
      this.router.navigate(['/']);
    }
  }

  ngOnInit(): void {
    this.loginForm = this.fb.group<UserLoginForm>({
      email: new FormControl('', Validators.required),
      password: new FormControl('', Validators.required)
    });
    //set return url from route parameters or default to '/'
    this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
  }

  get f() {
    return this.loginForm.controls;
  }

  get email(): AbstractControl<any>| null {
    return this.loginForm.get('email');
  }
  get password() {
    return this.loginForm.get('password');
  }

  onSubmit() {
    if (this.loginForm.invalid) {
      this.errorMessage = "Incorrect Credential";
      return;
    }
    this.submitted = true;
    this.loading = true;
    this.authService.login(this.f.email?.value, this.f.password?.value)
      .subscribe(
        {
          next: (data) => { this.router.navigate([this.returnUrl]); },
          error: (error) => {
            this.errorMessage = error;
            this.loading = false;
          },
          complete: () => console.info('complete')
        });
  }

}
