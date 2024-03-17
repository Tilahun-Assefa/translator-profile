import { TranslationOrder } from "./translation-order";
import { User } from "./user";

export interface Translator extends User {
  dateOfStart: Date;
  bio:string;
  photoUrl?: string;
  address: string;
  translationOrders: TranslationOrder[];
}
