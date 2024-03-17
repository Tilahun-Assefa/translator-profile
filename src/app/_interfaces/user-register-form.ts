import { FormControl } from "@angular/forms";

export interface UserRegisterForm {
  first_name: FormControl<string | null>;
  last_name: FormControl<string | null>;
  email: FormControl<string | null>;
  password: FormControl<string | null>;
  verify_password: FormControl<string | null>;
  telephone?: FormControl<string | null>;
  address?: FormControl<string | null>;
  role?: FormControl<string | null>;
}
