import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CartService } from './cart.service';
import { RouterModule } from '@angular/router';
import { FormBuilder, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-cart',
  standalone: true,
  imports: [CommonModule, RouterModule, ReactiveFormsModule],
  template: `    
    <h1>Cart</h1>
    <p>
      <a routerLink="/shipping">Shipping Prices</a>
    </p>
    <div class="cart-card" *ngFor="let translator of translators">
      <span>{{ translator.name }}</span>
      <span>{{ translator.price | currency }}</span>
    </div>

    <form [formGroup]="checkoutForm" (ngSubmit)="onSubmit()">
      <div>
        <label for="name"> Name </label>
        <input id="name" type="text" formControlName="name">
      </div>

      <div>
        <label for="address"> Address </label>
        <input id="address" type="text" formControlName="address">
      </div>
      <button class="button" type="submit">Purchase</button>    
    </form>
  `,
  styles: [`
    .cart-card{
      display: flex;
      justify-content: center;
      gap: 20px;
      padding: 20px;
      flex-direction:column;
      border-radius:10px;
      box-shadow:rgba(0,0,0,0.16) 0px 10px 36px 0px, rgba(0,0,0,0.06) 0px 0px 0px 1px;
      width:300px;
    }

    h1{
      align: center;
    }
  `]
})
export class CartComponent {

  translators = this.cartService.getItems();

  constructor(
    private cartService: CartService, private formBuilder: FormBuilder
  ) { }

  checkoutForm = this.formBuilder.group({
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
