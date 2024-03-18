import { FormControl } from "@angular/forms";
import { TranslatorCreateForm } from "./translator-create-form";

export interface TranslatorUpdateForm extends TranslatorCreateForm{
  activityStatus: FormControl<boolean | null>;
}
