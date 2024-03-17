import { TranslationOrder } from "./translation-order";

export interface User {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
  telephone: string;
  address: string;
  role:string;
  translationOrders: TranslationOrder[];
}
