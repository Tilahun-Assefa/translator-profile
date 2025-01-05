import { Component, inject } from '@angular/core';
import { Product, ProductService } from './product.service';
import { FormsModule } from '@angular/forms';
import { CartService } from '../cart/cart.service';

@Component({
  selector: 'app-product',
  imports: [FormsModule],
  templateUrl: "product.component.html",
  styleUrls: ["product.component.css"]
})
export class ProductComponent {
  private productService = inject(ProductService);
  cartService = inject(CartService);

  products = this.productService.products;
  selectedProduct = this.productService.selectedProduct ;
  quantity = this.productService.quantity;
  total = this.productService.total;
  color = this.productService.color;

  addToCart(item: Product| undefined, qty: number) {
    window.alert('Your product has been added to the cart!');
    this.cartService.addToOrder(item, qty);
  }
}
