import { HttpClient, HttpErrorResponse, httpResource } from '@angular/common/http';
import { computed, effect, inject, Injectable, linkedSignal, ResourceRef, Signal, signal } from '@angular/core';
import { rxResource } from '@angular/core/rxjs-interop';
import { delay, map } from 'rxjs';
import { environment } from 'src/environments/environment.development';
import { setErrorMessage } from '../shared/error-message';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private urlProduct = environment.urlAddress;
  private http = inject(HttpClient);

  //signals managed byservice
  selectedProduct = signal<Product | undefined>(undefined);

  quantity: Signal<number> = linkedSignal({
    source: this.selectedProduct,
    computation: (v) => {
      if (v) {
        return 1;
      }
      return 0;
    }
  });
  total: Signal<number> = computed(() => (this.selectedProduct()?.price ?? 0) * this.quantity());
  color: Signal<string> = computed(() => this.total() > 400 ? 'green' : 'red');

  //First page of products
  //if the price is empty assign a price(if we can not modify in the backend)
  private products$ = this.http.get<ProductResponse>(this.urlProduct + "/api/Product/GetAll").pipe(
    map(pr => pr.data.map((p) => ({
      ...p,
      price: isNaN(Number(p.price)) ? Math.round(Math.random() * 10000) : p.price,
    }) as Product)
    ),
    delay(2000)
  );


  private productResource: ResourceRef<Product[] | undefined> = rxResource({
    loader: () => this.products$
    // loader: () => this.http.get<ProductResponse>(this.urlProduct + "/api/Product/GetAll").pipe(
    //   map(pr => pr.data),
    //   delay(2000)
    // )
  });

  products: Signal<Product[]> = computed(() => this.productResource.value() ?? [] as Product[]);
  error: Signal<HttpErrorResponse> = computed(() => this.productResource.error() as HttpErrorResponse);
  errorMessage = computed(() => setErrorMessage(this.error(), "Product"));
  errorStatus = computed(() => this.error().status)
  isLoading: Signal<boolean> = this.productResource.isLoading;

  getProductById(productId: Signal<number>) {
    return httpResource<ProductResponseById>(() => productId() ? `${this.urlProduct}/api/Product/${productId()}` : undefined);
  }


}

export interface ProductResponse {
  success: boolean;
  message: string;
  data: Product[];
}

export interface ProductResponseById {
  success: boolean;
  message: string;
  data: Product;
}

export interface Product {
  id: number;
  name: string;
  partNumber: string;
  price: number;
  description: string;
  rating: number;
}