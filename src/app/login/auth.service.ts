import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject, Observable, throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { User } from './user';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private userSubject: BehaviorSubject<User | null>;
  public user$: Observable<User | null>;

  constructor(private http: HttpClient, private router: Router) {
    this.userSubject = new BehaviorSubject<User | null>(JSON.parse(localStorage.getItem('user')!));
    this.user$ = this.userSubject.asObservable();
  }

  public get userValue(): User | null {
    return this.userSubject.value;
  }

  login(username: string | null, password: string | null): Observable<User> {
    return this.http.post<any>(`${environment.apiUrl}/customer/authenticate`, { email, password })
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

  getUser(): any{
    return localStorage.getItem('user');
  }

  private handleError(error: HttpErrorResponse){
    if(error.status === 0){
      
    }
  }
}
