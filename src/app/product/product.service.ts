import { HttpClient, HttpErrorResponse } from '@angular/common/http';
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

  private productResource: ResourceRef<Product[]> = rxResource({
    loader: () => this.http.get<ProductResponse>(this.urlProduct + "/api/Product/GetAll").pipe(
      map(pr => pr.data),
      delay(2000)
    )
  });

  products: Signal<Product[]> = computed(() => this.productResource.value() ?? [] as Product[]);
  error: Signal<HttpErrorResponse> = computed(() => this.productResource.error() as HttpErrorResponse);
  errorMessage = computed(() => setErrorMessage(this.error(), "Product"));
  errorStatus = computed(() => this.error().status)
  isLoading: Signal<boolean> = this.productResource.isLoading;

  private errEffect = effect(() => console.error("Error", this.error()));
}

export interface ProductResponse {
  success: boolean;
  message: string;
  data: Product[];
}

export interface Product {
  id: number;
  name: string;
  partNumber: string;
  price: number;
  description: string;
  rating: number;
}