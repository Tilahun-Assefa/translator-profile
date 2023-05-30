import { Injectable } from '@angular/core';

export interface Translator {
  name: string;
  description: string;
  photoUrl: string;
  address: string;
}

@Injectable({
  providedIn: 'root'
})
export class ProfileService {

  constructor() { }
  profiles: Translator[] = [
    {
      name: "til", description: "til translate amharic", photoUrl: "assets/til.jpeg", address: "Olathe"

    },
    {
      name: "John", description: "John translate english", photoUrl: "assets/john.jpeg", address: "Lenexa"

    },
    {
      name: "Amy", description: "Amy translate thai", photoUrl: "assets/amy.jpeg", address: "Gardner"

    }
  ]
}
