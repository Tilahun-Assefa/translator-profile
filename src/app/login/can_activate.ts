import { inject, Injectable } from "@angular/core";
import { CanActivateFn, ActivatedRouteSnapshot, RouterStateSnapshot, Router, UrlTree } from "@angular/router";
import { map, catchError, of, Observable } from "rxjs";
import { AuthService } from "./auth.service";

export const canActivate: CanActivateFn = (route: ActivatedRouteSnapshot,
  state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree => {
  const authService = inject(AuthService);
  const router = inject(Router);

  // return authService.token$
  //   .pipe(
  //     map(() => true),
  //     catchError(() => {
  //       router.createUrlTree(['/']);
  //       return of(false);
  //     })
  //   );
  if (authService.isLoggedIn()) {
    //authenticated and return true
    return true;
  }
  //if not authenticated redirect to login page with the return url
  router.navigate(['/login'], { queryParams: { returnUrl: state.url } });
  return false;
};


const canActivateTeam: CanActivateFn = (route: ActivatedRouteSnapshot, state: RouterStateSnapshot) => {
  return inject(PermissionService).canActivate(inject(UserToken), route.params["id"]);
}

@Injectable()
class UserToken { }

@Injectable()
class PermissionService {
  canActivate(currentUser: UserToken, userId: string): boolean {
    return true;
  }
  canMatch(currentUser: UserToken): boolean {
    return true;
  }
}