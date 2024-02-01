import { Injectable } from '@angular/core';

export interface Translator {
  name: string;
  description: string;
  photoUrl: string;
  address: string;
  price_hour: number;
}

@Injectable({
  providedIn: 'root'
})
export class ProfileService {

  constructor() { }
  profiles: Translator[] = [
    {
      name: "til", description: "til translate amharic", photoUrl: "assets/img/til.jpg", address: "Olathe", price_hour: 78
    },
    {
      name: "John", description: "John translate english", photoUrl: "https://picsum.photos/id/35/500/300", address: "Lenexa", price_hour: 120
    },
    {
      name: "Amy", description: "Amy translate thai", photoUrl: "https://picsum.photos/id/5/500/300", address: "Gardner", price_hour: 65
    }
  ]
}
