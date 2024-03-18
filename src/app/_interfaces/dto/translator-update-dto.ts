import { TranslatorCreateDto } from "./translator-create-dto";

export interface TranslatorUpdateDto extends TranslatorCreateDto {
    id: string | null;
    activityStatus: boolean | null;
}