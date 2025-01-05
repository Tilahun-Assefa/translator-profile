import { Component, Signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CartService, OrderLine } from './cart.service';
import { RouterModule } from '@angular/router';
import { FormBuilder, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-cart',
  imports: [CommonModule, RouterModule, ReactiveFormsModule],
  templateUrl: 'cart.component.html',
  styleUrls: ['cart.component.css']
})
export class CartComponent {
  constructor(
    private cartService: CartService, private fb: FormBuilder
  ) { }
  orderLines: Signal<OrderLine[]> = this.cartService.orders;
  itemsCount= this.cartService.cartCount;
  totalCost = this.cartService.totalCost;

  checkoutForm = this.fb.group({
    name: '',
    address: ''
  });

  onSubmit(): void {
    // Process checkout data here
    console.warn('Your order has been submitted', this.checkoutForm.value);
    this.checkoutForm.reset();
  }
}
