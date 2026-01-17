import { Component, effect, inject, signal } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductDto, productInitialState, productSchema } from '../product';
import { FieldTree, form, FormField, submit } from '@angular/forms/signals';
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


  onSubmit(event: Event): void {
    event.preventDefault();
    // Process checkout data here
    // if (this.productForm().valid()) {
    // const newProduct: ProductDto = {
    // name: this.productForm().value().name,
    // partNumber: this.productForm().value().partNumber,
    // price: this.productForm().value().price,
    // description: this.productForm().value().description,
    // rating: this.productForm().value().rating,
    // }
    // }
    const apiUrl = 'api/product';
    submit(this.productForm, async (f) => {
      const result =await this.productService.createProduct(apiUrl, f().value());
      console.log('Product creation result:', result);
      return result;
    });

    this.productForm().reset()
  }

  returnToProductList() {
    this.router.navigate(['/products']);
  }
}

//   async function saveNewProduct(productForm: FieldTree<ProductDto>) {
//     const result = await this.productService.createProduct('api/product', productForm().value());
//     if (true) {
//       return [{
//         type: 'success',
//         message: 'Product saved successfully.'
//       }];
//     } else {
//       return [{
//         type: 'error',
//         message: 'Failed to save product: '
//       }];
//     }
//     return [{ type: 'info', message: 'No action taken.' }];

//   }
