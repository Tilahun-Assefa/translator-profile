import { FormControl } from "@angular/forms";
import { UserRegisterForm } from "./user-register-form";

export interface TranslatorUpdateForm extends UserRegisterForm{
  bio: FormControl<string | null>;
  activityStatus: FormControl<boolean | null>;
  startDate: FormControl<Date | null>;
  imageUrl?: FormControl<string | null>;
}
