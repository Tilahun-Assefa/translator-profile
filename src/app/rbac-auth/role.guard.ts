import { CanActivateFn, Router } from '@angular/router';
import { RoleType } from './role.model';
import { inject } from '@angular/core';
import { RbacAuthService } from './rbac-auth.service';

export const roleGuard: CanActivateFn = (route, state) => {
  const router = inject(Router);
  const auth = inject(RbacAuthService);
  const requiredRoles = route.data['roles'] as RoleType[];

  if (auth.hasRole(requiredRoles)) {
    return true;
  }

  router.navigate(['/unauthorized']);
  return false;
};



// app-routing.module.ts
/*
const routes: Routes = [
  {
    path: 'admin-panel',
    component: AdminPanelComponent,
    canActivate: [RoleGuard],
    data: { roles: [RoleType.ADMIN] }
  },
  {
    path: 'management-dashboard',
    component: ManagementDashboardComponent,
    canActivate: [RoleGuard],
    data: { roles: [RoleType.ADMIN, RoleType.MANAGER] }
  }
];
#################################
export enum ROLE_LIST_ENUM {
   "ADMIN" = "ADMIN",
   "CLIENT" = "CLIENT"
}

const routes: Routes = [
  { path: '', component: AuthComponent},
  { path: 'assitants', 
    component: AssitantsComponent,
    canActivate: [AuthGard],
    data: { roles: [ROLE_LIST_ENUM.ADMIN]} 
  },
  { path: 'client',
    component: ClientComponent,
    canActivate: [AuthGard]
    data: { roles: [ROLE_LIST_ENUM.CLIENT]}
  }
]

canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {
  
     const accessToken = localStorage.getItem(AuthGard.LOCAL_STORAGE_ACCESS_TOKEN)
     if(!accessToken){
         return this.router.createUrlTree(['/auth'])
     }

     return this._hasRole(route.data);
  }

private _hasRole(data: GENERIC_KEY_VALUE_INTERFACE): boolean {
        const userAvailableRoleList = jwtDecode<yourInterface>(yourToken).roles;
        const hasRole = !!(data['roles'] as string[])?.find(e => userAvailableRoleList.find(list => list === e));

        return hasRole;
    }

export interface GENERIC_KEY_VALUE_INTERFACE {
  [key: string]: any;
}
*/