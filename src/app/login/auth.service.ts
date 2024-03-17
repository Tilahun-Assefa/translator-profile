import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject, Observable, throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { User } from '../_interfaces/user';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private userSubject: BehaviorSubject<User | null>;
  public user$: Observable<User | null>;
  private apiUrl = 'http://localhost:3002/api';

  constructor(private http: HttpClient, private router: Router) {
    this.userSubject = new BehaviorSubject<User | null>(JSON.parse(localStorage.getItem('user')!));
    this.user$ = this.userSubject.asObservable();
  }

  public get userValue(): User | null {
    return this.userSubject.value;
  }

  login(email: string | null, password: string | null): Observable<User> {
    return this.http.post<any>(`${this.apiUrl}/customer/authenticate`, { email, password })
      .pipe(
        map(user => {
          //store customer detail and basic credentials in local storage
          localStorage.setItem('user', JSON.stringify(user));
          this.userSubject.next(user);
          return user
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
    localStorage.removeItem('user');
    this.userSubject.next(null);
    this.router.navigate(['/login']);
  }

  getUser(): any {
    return localStorage.getItem('user');
  }
  isLoggedIn(): boolean {
    return this.getUser() !== null;
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
