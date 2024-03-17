export interface TranslationOrder {
  order_date: Date;
  document_title: string;
  category: Category;
  issuing_organization: string;
  price: number;
  translatorId?: string;
  languageId?: string;
  customerId?: string;
}

export enum Category{
  "Insurance", "Construction", "Court", "Medical","LifeEvents", "Education","Police","Transport"
}
