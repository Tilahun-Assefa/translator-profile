import { HttpClient } from '@angular/common/http';
import { computed, inject, Injectable, linkedSignal, ResourceRef, Signal, signal } from '@angular/core';
import { rxResource } from '@angular/core/rxjs-interop';
import { map } from 'rxjs';
import { environment } from 'src/environments/environment.development';

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

  productResource: ResourceRef<Product[]> = rxResource({
    loader: () => this.http.get<ProductResponse>(this.urlProduct + "/api/Product/GetAll").pipe(
      map(pr => pr.data)
    )
  });

  products: Signal<Product[]> = computed(() => this.productResource.value() ?? [] as Product[]);
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