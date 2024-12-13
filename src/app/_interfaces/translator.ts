import { User } from "./user";
import { TranslationOrder } from "./translation-order";

export interface Translator extends User {
  startDate?: Date | null;
  bio?:string | null;
  imageUrl?: string | null;
}
