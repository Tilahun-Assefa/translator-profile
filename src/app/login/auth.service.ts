import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject, Observable, of, throwError } from 'rxjs';
import { catchError, delay, switchMap, tap } from 'rxjs/operators';
import { User } from '../_interfaces/user';
import { environment } from 'src/environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private http = inject(HttpClient);
  private router = inject(Router);

  private tokenSubject: BehaviorSubject<string | null> = new BehaviorSubject<string | null>(JSON.parse(localStorage.getItem('token')!));
  public token$: Observable<string | null> = this.tokenSubject.asObservable();
  private apiUrl = environment.urlAddress;

  // Track login state with BehaviorSubject
  private isUserLoggedInSubject = new BehaviorSubject<boolean>(false);

  constructor() {
    // Only initialize sessionStorage on the client-side (browser)
    if (typeof window !== 'undefined' && window.localStorage) {
      const storedLoginState = localStorage.getItem('isUserLoggedIn') === 'true';
      this.isUserLoggedInSubject.next(storedLoginState);
    }
  }

  public get tokenValue(): string | null {
    return this.tokenSubject.value;
  }

  // Expose the login status as an observable
  get isUserLoggedIn$(): Observable<boolean> {
    return this.isUserLoggedInSubject.asObservable();
  }

  login(email: string | null, password: string | null): Observable<boolean> {
    return this.http.post<any>(`${this.apiUrl}/customer/authenticate`, { email, password })
      .pipe(
        switchMap((token) => {
          const isLoggedIn = token !== null;
          //store customer detail and basic credentials in local storage
          if (typeof window !== 'undefined' && window.localStorage) {
            localStorage.setItem('isUserLoggedIn', isLoggedIn ? 'true' : 'false');
          }
          // Update the BehaviorSubject with new login state
          this.isUserLoggedInSubject.next(isLoggedIn);
          localStorage.setItem('token', JSON.stringify(token));
          this.tokenSubject.next(token);
          return of(isLoggedIn).pipe(
            delay(1000),
            tap(val => console.log("Is User Authentication successful: " + val))
          );
        }),

        catchError(err => {
          return throwError(() => new Error('Either Incorrect Username or Password'));
        })
      );
  }

  register(user: User): Observable<User> {
    return this.http.post<User>(`${this.apiUrl}/auth/register`, user)
      .pipe(
        catchError(this.handleError)
      );
  }

  logout() {
    //log out user by removing from local storage
    localStorage.removeItem('token');
    this.tokenSubject.next(null);

    if (typeof window !== 'undefined' && window.localStorage) {
      localStorage.removeItem('isUserLoggedIn');
    }
    // Update the BehaviorSubject to false when logged out
    this.isUserLoggedInSubject.next(false);
    this.router.navigate(['/login']);
  }

  getToken(): any {
    return localStorage.getItem('token');
  }
  isLoggedIn(): boolean {
    return this.getToken() !== null;
  } 

  private handleError(error: HttpErrorResponse) {
    if (error.status === 0) {
      // A client-side or network error occurred. Handle it accordingly.
      console.error('An error occurred:', error.error);
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong.
      console.error(`Backend returned code ${error.status}, body was: `, error.error);
    }
    // Return an observable with a user-facing error message.
    return throwError(() => new Error('Something bad happened; please try again later.'));
  }
}
