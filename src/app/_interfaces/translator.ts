import { TranslationOrder } from "./translation-order";

export interface Translator {
  id: string;
  name: string;
  dateofstart: Date;
  photoUrl?: string;
  address: string;

  translation_orders?: TranslationOrder[];
}
