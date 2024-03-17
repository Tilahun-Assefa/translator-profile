import { TranslationOrder } from "./translation-order";

export interface Language {
  id: string;
  fromToLanguage: string;
  description: string;
  translationOrders: TranslationOrder[];
}
