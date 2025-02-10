import { Routes } from '@angular/router';
import { TranslatorsListComponent } from './translator-profile/translators-list.component';
import { canActivate } from './login/can_activate';
import { HomeComponent } from './home/home.component';
import { NotFoundComponent } from './error-pages/not-found/not-found.component';
import { InternalServerComponent } from './error-pages/internal-server/internal-server.component';

export const routes: Routes = [
  { path: 'home', component: HomeComponent, canActivate: [canActivate] },
  { path: 'auth', loadChildren: () => import('./login/login.module').then(m => m.LoginModule) },
  { path: 'list', component: TranslatorsListComponent },
  { path: 'details/:index', loadComponent: () => import('./translator-profile/translator-profile-view/translator-profile-view.component').then(m => m.TranslatorProfileViewComponent) },
  { path: 'cart', loadComponent: () => import('./cart/cart.component').then(m => m.CartComponent) },
  { path: 'shipping', loadComponent: () => import('./shipping/shipping.component').then(m => m.ShippingComponent) },
  { path: 'pokemon', loadComponent: () => import('./pokemon/pokemon.component').then(m => m.PokemonComponent) },
  { path: 'products', loadComponent: () => import('./product/product.component').then(m => m.ProductComponent) },
  { path: 'jobs', loadComponent: () => import('./job/job.component').then(m => m.JobComponent) },
  { path: 'add-job', loadComponent: () => import('./job/add-job/add-job.component').then(m => m.AddJobComponent) },
  { path: 'update-job/:id', loadComponent: () => import('./job/update-job/update-job.component').then(u => u.UpdateJobComponent) },
  { path: '500', component: InternalServerComponent },
  { path: '', redirectTo: 'list', pathMatch: 'full' },
  { path: '**', redirectTo: '/404', pathMatch: 'full' }
];
