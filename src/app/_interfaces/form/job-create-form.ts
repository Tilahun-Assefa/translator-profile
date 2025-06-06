import { FormControl } from "@angular/forms";

export interface JobCreateForm {
    slottingDate?: FormControl<Date | null>;
    partNumber?: FormControl<string | null>;
    quantity?: FormControl<number | null>;
    startTime?: FormControl<Date | null>;
    finishTime?: FormControl<Date | null>;
    packCode?: FormControl<string | null>;
    packQty?: FormControl<number | null>;
}
