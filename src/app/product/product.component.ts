import { Component, computed, effect, inject, signal, Signal } from '@angular/core';
import { Product, ProductService } from './product.service';
import { FormsModule } from '@angular/forms';
import { CartService } from '../cart/cart.service';
import { HttpErrorResponse } from '@angular/common/http';
import { setErrorMessage } from '../shared/error-message';

@Component({
  selector: 'app-product',
  imports: [FormsModule],
  templateUrl: "product.component.html",
  styleUrls: ["product.component.css"]
})
export class ProductComponent {
  private productService = inject(ProductService);
  cartService = inject(CartService);
  productId = signal<number>(0);

  products = this.productService.products;
  selectedProduct = this.productService.selectedProduct;
  quantity = this.productService.quantity;
  total = this.productService.total;
  color = this.productService.color;
  isLoading = this.productService.isLoading;
  errorMessage = this.productService.errorMessage;

  productByIdResource = this.productService.getProductById(this.productId);
  productById: Signal<Product> = computed(() => this.productByIdResource.value()?.data ?? {} as Product);
  errorById: Signal<HttpErrorResponse> = computed(() => this.productByIdResource.error() as HttpErrorResponse);
  errorMessageById = computed(() => setErrorMessage(this.errorById(), "ProductById"));
  errorStatusById = computed(() => this.errorById().status)
  isLoadingById: Signal<boolean> = this.productByIdResource.isLoading;

  addToCart(item: Product | undefined, qty: number) {
    window.alert('Your product has been added to the cart!');
    this.cartService.addToOrder(item, qty);
  }
  productByIdEff = effect(() => console.log(this.selectedProduct()));
}
