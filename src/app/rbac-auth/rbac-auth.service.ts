import { inject, Injectable } from '@angular/core';
import { RoleType, User } from './role.model';
import { HttpClient } from '@angular/common/http';
import { Observable, tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RbacAuthService {
  http = inject(HttpClient);
  private currentUser: User | null = null;

  login(credentials: { username: string; password: string }): Observable<User> {
    return this.http.post<User>('/api/login', credentials).pipe(
      tap(user => {
        this.currentUser = user;
        localStorage.setItem('user', JSON.stringify(user));
      })
    );
  }

  hasRole(requiredRoles: RoleType[]): boolean {
    if (!this.currentUser) return false;

    return this.currentUser.roles.some(role =>
      requiredRoles.includes(role)
    );
  }

  hasMultipleRoles(requiredRoles: RoleType[]): boolean {
    if (!this.currentUser) return false;

    return requiredRoles.every(role =>
      this.currentUser!.roles.includes(role)
    );
  }
}
