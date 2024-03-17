export interface User {
  first_name: string | null;
  last_name: string | null;
  email: string | null;
  password: string | null;
  telephone?: string | null;
  address?: string | null;
  role?: string | null;
}


export enum Role {"USER", "TRANSLATOR", "ADMIN"}
