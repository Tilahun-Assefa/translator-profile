import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { RegisterForm, User } from '../user';
import { AuthService } from '../auth.service';

@Component({
  selector: 'dl-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
  standalone: true,
  imports: [ReactiveFormsModule]
})
export class RegisterComponent implements OnInit {

  registerForm!: FormGroup<RegisterForm>;
  user: User | undefined;
  roles: any = ['Admin', 'Author', 'Reader'];
  selectedRole: FormControl = new FormControl(this.roles[0]);

  constructor(private fb: FormBuilder, private authService: AuthService) {

  }

  ngOnInit(): void {
    this.registerForm = this.fb.group<RegisterForm>({
      first_name: new FormControl('', [Validators.required, Validators.minLength(3)]),
      last_name: new FormControl('', Validators.required),
      email: new FormControl('', Validators.required),
      password: new FormControl('', Validators.required),
      role: new FormControl(''),
      image_url: new FormControl('')
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
