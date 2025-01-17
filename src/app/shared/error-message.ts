import { HttpErrorResponse } from "@angular/common/http";

//transform HttpErrorResponse to a string
export function setErrorMessage(err: HttpErrorResponse, dataName?: string): string {
    let errorMessage = '';
    let name = dataName ?? '';
    if (err) {
        if (err.error instanceof ErrorEvent) {
            //a client side or network error occured. Handle here
            errorMessage = `An error occured: ${err.error.message}`;
        } else {
            // the backend returned unsuucesful response
            const status = err.status;
            if (status === 400) {
                errorMessage = `Bad Request. Please try again later.`;
            }
            if (status === 401) {
                errorMessage = `You are not authorized to access ${name} data`;
            }
            if (status === 404) {
                errorMessage = `${name} data was not found. Please try again later.`;
            }
            if (status > 500 && status<600) {
                errorMessage = `The serever is not currently working. Please try later.`;
            }
        }
    }
    return errorMessage;
}