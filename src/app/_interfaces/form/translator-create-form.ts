import { FormControl } from "@angular/forms";
import { UserRegisterForm } from "./user-register-form";

export interface TranslatorCreateForm extends UserRegisterForm {
  bio: FormControl<string | null>;
  startDate: FormControl<Date | null>;
  imageUrl?: FormControl<string | null>;
}
