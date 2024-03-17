export interface TranslationOrder {
  id: string;
  orderDate: Date;
  documentTitle: string;
  category: string;
  issuingOrganization: string;
  price: number;
  translatorId?: string;
  languageId?: string;
  userId?: string;
}
