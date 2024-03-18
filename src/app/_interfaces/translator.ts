import { TranslationOrder } from "./translation-order";
import { User } from "./user";

export interface Translator extends User {
  startDate: Date;
  bio:string;
  imageUrl?: string;
}
