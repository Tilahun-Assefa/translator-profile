import { FormControl } from "@angular/forms";
import { UserRegisterForm } from "./user-register-form";

export interface TranslatorUpdateForm extends UserRegisterForm{
  bio: FormControl<string | null>;
  activity_status?: FormControl<boolean | null>;
  start_date: FormControl<Date | null>;
  image_url?: FormControl<string | null>;
}
