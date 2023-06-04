import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TranslatorsListComponent } from './translator-profile/translators-list.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'list' },
  { path: 'list', component: TranslatorsListComponent },
  { path: 'details/:index', loadComponent: () => import('./translator-profile/translator-profile-view.component').then(m => m.TranslatorProfileViewComponent) },
  { path: 'cart', loadComponent: () => import('./cart/cart.component').then(m=>m.CartComponent)},
  { path: 'shipping', loadComponent: () => import('./shipping/shipping.component').then(m=>m.ShippingComponent)}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
