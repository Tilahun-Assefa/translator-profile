import { UserCreateDto } from "./user-create-dto";

export interface TranslatorCreateDto extends UserCreateDto {
  bio?: string | null
  startDate: Date | null;
  imageUrl?: string | null;
}
