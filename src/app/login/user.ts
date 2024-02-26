import { FormControl } from "@angular/forms";

export interface User {
    first_name: string;
    last_name: string;
    email: string;
    password: string;
    role: string;
    image_url: string;
}

export interface LoginForm {
    email: FormControl<string | null>;
    password: FormControl<string | null>;
}

export interface RegisterForm {
    first_name: FormControl<string | null>;
    last_name: FormControl<string | null>;
    email: FormControl<string | null>;
    password: FormControl<string | null>;
    role?: FormControl<string | null>;
    image_url?: FormControl<string | null>;
}