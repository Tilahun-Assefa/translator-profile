import { Component, effect, inject, signal } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductDto, productInitialState, productSchema } from '../product';
import { form, FormField } from '@angular/forms/signals';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-product-form',
  imports: [FormField],
  templateUrl: './product-form.html',
  styleUrls: [`./product-form.css`],
})
export class ProductForm {
  router = inject(Router);
  route = inject(ActivatedRoute);
  productService = inject(ProductService);

  productModel = signal<ProductDto>(productInitialState);
  productForm = form(this.productModel, productSchema);

  eff = effect(() => {
    console.log("Product Model changed:", this.productModel());
  });


  onSubmit(): void {
    // Process checkout data here
    if (this.productForm().valid()) {
      const newProduct: ProductDto = {
        name: this.productForm().value().name,
        partNumber: this.productForm().value().partNumber,
        price: this.productForm().value().price,
        description: this.productForm().value().description,
        rating: this.productForm().value().rating,
      }
      const apiUrl = 'api/product';
      this.productService.createProduct(apiUrl, newProduct);
    }
    this.productForm().reset();
  }

  returnToProductList() {
    this.router.navigate(['/products']);
  }
}
