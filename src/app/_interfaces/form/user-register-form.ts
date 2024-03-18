import { FormControl } from "@angular/forms";

export interface UserRegisterForm {
  firstName: FormControl<string | null>;
  lastName: FormControl<string | null>;
  email: FormControl<string | null>;
  password: FormControl<string | null>;
  verifyPassword: FormControl<string | null>;
  telephone: FormControl<string | null>;
  address?: FormControl<string | null>;
  role?: FormControl<string | null>;
}
