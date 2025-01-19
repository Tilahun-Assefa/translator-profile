import { computed, inject, Injectable, Signal, signal } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  http = inject(HttpClient);
  orders = signal<OrderLine[]>([]);

  getShippingPrices(): Observable<{ id: number, type: string, price: number }[]> {
    return this.http.get<{ id: number, type: string, price: number }[]>('/assets/shipping.json');
  }

  //add item to orders
  addToOrder(product: Product| undefined, qty: number): void {
    this.orders.update(lines => [...lines, { product, qty: qty }])
  }

  //remove item from orders
  romoveOrderLine(orderLine: OrderLine): void {
    this.orders.update(lines => lines.filter(line => line.product?.partNumber !== orderLine.product?.partNumber));
  }

  //change item quantity from orders
  updateOrderLine(orderLine: OrderLine, qty: number): void {
    this.orders.update(lines => lines.map(line => (line.product?.partNumber === orderLine.product?.partNumber) ? { product: orderLine.product, qty: qty } : line));
  }

  cartCount: Signal<number> = computed(() => this.orders().reduce((acc, line) => acc + line.qty, 0));
  totalCost: Signal<number> = computed(() => this.orders().reduce((acc, line) => acc + line.qty * (line.product?.price??0), 0));

}

export interface OrderLine {
  product: Product | undefined;
  qty: number;
}

interface Product {
  partNumber: string;
  name: string;
  price: number;
};
