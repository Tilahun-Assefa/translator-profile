export interface User {
  id: string;
  firstName: string | null;
  lastName: string | null;
  email: string | null;
  password: string|null;
  telephone: string | null;
  address?: string | null;
  role?:string | null;
}
