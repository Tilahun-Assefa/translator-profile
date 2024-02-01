import { Injectable } from '@angular/core';
import { Translator } from '../translator-profile/profile.service';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  translators: Translator[] = [];

  constructor(private http: HttpClient) { }

  addToCart(translator: Translator) {
    this.translators.push(translator);
  }

  getItems() {
    return this.translators;
  }

  clearCart() {
    this.translators = [];
    return this.translators;
  }

  getShippingPrices(): Observable<{ id: number, type: string, price: number }[]> {
    return this.http.get<{ id: number, type: string, price: number }[]>('/assets/shipping.json');
  }
}
