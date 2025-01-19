import { CommonModule } from '@angular/common';
import { Component, computed, effect, Signal, signal, WritableSignal } from '@angular/core';
import { CartService } from '../cart/cart.service';
import { Observable } from 'rxjs';
import { FormControl, FormsModule, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-shipping',
  imports: [CommonModule, FormsModule, ReactiveFormsModule],
  templateUrl: './shipping.component.html',
  styleUrls: ['./shipping.component.css']
})
export class ShippingComponent {

  price = new FormControl('');
  quantity: WritableSignal<number> = signal(1);
  qtyAvailable: WritableSignal<number[]> = signal([1, 2, 3, 4]);

  selectedShippingCost: WritableSignal<ShippingCost> = signal<ShippingCost>({ id: 1, type: "Port", price: 70 });
  costs: WritableSignal<ShippingCost[]> = signal<ShippingCost[]>([]);
  exPrice: Signal<number> = computed(() => this.selectedShippingCost().price * this.quantity());

  constructor(private cartService: CartService) {
    console.log("constructor", this.quantity());
    // this.quantity.update(qty => qty * 2);
  }

  shippingCosts!: Observable<ShippingCost[]>;

  ngOnInit(): void {
    this.shippingCosts = this.cartService.getShippingPrices();
  }

  qtyEffect = effect(() => console.log("Latest quantity", this.quantity()));

  onChangeSelectedQuantity(_qty: number) {
    this.quantity.update(qty => qty = _qty);
  }

  onChangeSelectedPrice(price: number) {
    this.selectedShippingCost.update((s: any) => ({ id: s.id, type: s.type, price: price }));
  }
}

export interface ShippingCost {
  id: number;
  type: string;
  price: number;
}
