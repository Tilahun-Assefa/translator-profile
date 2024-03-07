export interface TranslationOrder {
  orderdate: Date;
  translationtype: string;
  price: number;
  translatorid?: string;
  languageid?: string;
  customerid?: string;
}
