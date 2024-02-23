import { FormControl } from "@angular/forms";

export interface User{
    first_name: string;
    last_name: string;
    email: string;
    password: string;
    role: string;
    image_url: string;
}

export interface Loginform{
    email: FormControl<string>;
    passwor?: FormControl<string>;
}

export interface RegisterForm{
    first_name: string;
    last_name: string;
    email: string;
    password: string;
    role?: string;
    image_url?: string;
}