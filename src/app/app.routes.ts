import { Routes } from '@angular/router';
import { TranslatorsListComponent } from './translator-profile/translators-list.component';
import { canActivate } from './login/can_activate';
import { HomeComponent } from './home/home.component';
import { NotFoundComponent } from './error-pages/not-found/not-found.component';
import { InternalServerComponent } from './error-pages/internal-server/internal-server.component';

export const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'auth', loadChildren: () => import('./login/login.module').then(m => m.LoginModule) },
  { path: 'list', component: TranslatorsListComponent, canActivate: [canActivate] },
  { path: 'details/:index', loadComponent: () => import('./translator-profile/translator-profile-view/translator-profile-view.component').then(m => m.TranslatorProfileViewComponent) },
  { path: 'cart', loadComponent: () => import('./cart/cart.component').then(m => m.CartComponent) },
  { path: 'shipping', loadComponent: () => import('./shipping/shipping.component').then(m => m.ShippingComponent) },
  { path: 'pokemon', loadComponent: () => import('./pokemon/pokemon.component').then(m => m.PokemonComponent) },
  { path: '404', component: NotFoundComponent },
  { path: '500', component: InternalServerComponent },
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: '**', redirectTo: '/404', pathMatch: 'full' }
];
