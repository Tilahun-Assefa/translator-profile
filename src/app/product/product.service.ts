import { HttpClient, HttpErrorResponse, HttpHeaders, httpResource } from '@angular/common/http';
import { computed, inject, Injectable, linkedSignal, ResourceRef, Signal, signal } from '@angular/core';
import { rxResource } from '@angular/core/rxjs-interop';
import { delay, map, Observable, throwError } from 'rxjs';
import { environment } from 'src/environments/environment.development';
import { setErrorMessage } from '../shared/error-message';
import { Product, ProductDto, ProductResponse, ProductResponseById } from './product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private urlProduct = environment.urlAddress;
  private http = inject(HttpClient);
  errorMessageProduct: string = '';
  urlAddress: string = environment.urlAddress;

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
    stream: () => this.products$
    // stream: () => this.http.get<ProductResponse>(this.urlProduct + "/api/Product/GetAll").pipe(
    //   map(pr => pr.data),
    //   delay(2000)
    // )
  });

  products: Signal<Product[]> = computed(() => this.productResource.value() ?? [] as Product[]);
  error: Signal<HttpErrorResponse> = computed(() => this.productResource.error() as HttpErrorResponse);
  errorMessage = computed(() => setErrorMessage(this.error(), "Product"));
  errorStatus = computed(() => this.error().status)
  isLoading: Signal<boolean> = this.productResource.isLoading;

  getProductById(productId: Signal<number | undefined>) {
    return httpResource<ProductResponseById>(() => productId() ? `${this.urlProduct}/api/Product/${productId()}` : undefined);
  }

  public createProduct = (route: string, product: ProductDto): void => {
    this.http.post<ProductResponse>(this.createCompleteRoute(route, this.urlAddress), product, this.generateHeaders())
      .subscribe(
        {
          next: (res: any) => {
            this.products = computed(() => res ?? [] as Product[]);
          },
          error: (err: HttpErrorResponse) => {
            this.errorMessageProduct = err.message;
          }
        });
  }

  private createCompleteRoute = (route: string, envAddress: string) => {
    return `${envAddress}/${route}`;
  }

  private generateHeaders = () => {
    return {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' })
    }
  }

  private handleError(err: HttpErrorResponse): Observable<never> {
    // in a real world app, we may send the server to some remote logging infrastructure
    // instead of just logging it to the console
    let errorMessage = '';
    if (err.error instanceof ErrorEvent) {
      // A client-side or network error occurred. Handle it accordingly.
      errorMessage = `An error occurred: ${err.error.message}`;
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong,
      errorMessage = `Server returned code: ${err.status}, error message is: ${err.message
        }`;
    }
    console.error(errorMessage);
    return throwError(() => errorMessage);
  }
}