import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CartService } from './cart.service';
import { RouterModule } from '@angular/router';
import { FormBuilder, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-cart',
  standalone: true,
  imports: [CommonModule, RouterModule, ReactiveFormsModule],
  templateUrl: 'cart.component.html',
  styleUrls: ['cart.component.css']
})
export class CartComponent {

  translators = this.cartService.getItems();

  constructor(
    private cartService: CartService, private fb: FormBuilder
  ) { }

  checkoutForm = this.fb.group({
    name: '',
    address: ''
  });

  onSubmit(): void {
    // Process checkout data here
    this.translators = this.cartService.clearCart();
    console.warn('Your order has been submitted', this.checkoutForm.value);
    this.checkoutForm.reset();
  }
}
