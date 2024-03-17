import { TranslationOrder } from "./translation-order";
import { TranslatorCreateDto } from "./translator-create-dto";

export interface Translator extends TranslatorCreateDto {
  id: string
}
