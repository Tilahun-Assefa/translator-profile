import { User } from "./user";

export interface Translator extends User {
  startDate?: Date | null;
  bio?:string | null;
  imageUrl?: string | null;
}
