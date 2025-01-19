import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { AuthService } from '../auth.service';
import { UserRegisterForm } from 'src/app/_interfaces/form/user-register-form';
import { User } from 'src/app/_interfaces/user';

@Component({
    selector: 'dl-register',
    templateUrl: './register.component.html',
    styleUrls: ['./register.component.css'],
    imports: [ReactiveFormsModule]
})
export class RegisterComponent implements OnInit {

  registerForm!: FormGroup<UserRegisterForm>;
  user: User | undefined;
  roles: string[] = ['Admin', 'Translator', 'User'];
  selectedRole: FormControl = new FormControl(this.roles[0]);

  constructor(private fb: FormBuilder, private authService: AuthService) {

  }

  ngOnInit(): void {
    this.registerForm = this.fb.group<UserRegisterForm>({
      firstName: new FormControl('', [Validators.required, Validators.minLength(3)]),
      lastName: new FormControl('', Validators.required),
      email: new FormControl('', Validators.required),
      password: new FormControl('', Validators.required),
      verifyPassword: new FormControl('', Validators.required),
      telephone: new FormControl('', Validators.required),
      address: new FormControl('', Validators.required),
      role: new FormControl('', Validators.required),
    });
  }

  onSubmit() {
    if (this.registerForm?.valid) {
      console.log(this.registerForm.value);
      this.authService.register(this.registerForm.value as User)
        .subscribe((res: any) => {
          this.user = res.body
        });
    }
    this.registerForm?.reset();
  }

}
