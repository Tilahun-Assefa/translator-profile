import { TranslationOrder } from "./translation-order";
import { User } from "./user";

export interface TranslatorCreateDto extends User {
  bio?: string | null
  activity_status?: boolean | null;
  start_date: Date | null;
  image_url?: string | null;
}
