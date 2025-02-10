import { FormControl } from "@angular/forms";

export interface JobUpdateForm {
    id: FormControl<string |null>;
    slottingDate?: FormControl<Date | null>;
    partNumber?: FormControl<string | null>;
    quantity?: FormControl<number | null>;
    startTime?: FormControl<Date | null>;
    finishTime?: FormControl<Date | null>;
    packCode?: FormControl<string | null>;
    packQty?: FormControl<number | null>;
}
