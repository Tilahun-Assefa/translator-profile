import { CommonModule } from '@angular/common';
import { Component, computed, effect, signal } from '@angular/core';
import { CartService } from '../cart/cart.service';
import { Observable } from 'rxjs';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-shipping',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './shipping.component.html',
  styleUrls: ['./shipping.component.css']
})
export class ShippingComponent {

  quantity = signal(1);
  qtyAvailable = signal([1, 2, 3, 4]);

  selectedShippingCost = signal<ShippingCost>({ id: 1, type: "Port", price: 70 });
  costs = signal<ShippingCost[]>([]);
  exPrice = computed(() => this.selectedShippingCost().price * this.quantity());

  constructor(private cartService: CartService) {
    console.log("constructor", this.quantity());

    this.quantity.update(qty => qty * 2);

    this.selectedShippingCost.mutate(s => s.price *= 1.2);
  }

  shippingCosts!: Observable<{ type: string, price: number }[]>;

  ngOnInit(): void {
    this.shippingCosts = this.cartService.getShippingPrices();
  }

  qtyEffect = effect(() => console.log("Latest quantity", this.quantity()));

  onChangeSelectedQuantity(qty: number) {
    this.quantity.set(qty);
  }
}

export interface ShippingCost {
  id: number;
  type: string;
  price: number;
}
