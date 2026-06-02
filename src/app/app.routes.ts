import { Routes } from '@angular/router';
import { canActivate } from './login/can_activate';

export const routes: Routes = [
  { path: 'home', loadComponent: () => import('./home/home.component').then(m => m.HomeComponent), canActivate: [canActivate] },
  { path: 'auth', loadChildren: () => import('./login/login.module').then(m => m.LoginModule) },
  { path: 'list', loadComponent: () => import('./translator-profile/translators-list.component').then(m => m.TranslatorsListComponent) },
  { path: 'details/:index', loadComponent: () => import('./translator-profile/translator-profile-view/translator-profile-view.component').then(m => m.TranslatorProfileViewComponent) },
  { path: 'cart', loadComponent: () => import('./cart/cart.component').then(m => m.CartComponent) },
  { path: 'shipping', loadComponent: () => import('./shipping/shipping.component').then(m => m.ShippingComponent) },
  { path: 'pokemon', loadComponent: () => import('./pokemon/pokemon.component').then(m => m.PokemonComponent) },

  { path: 'products', loadComponent: () => import('./product/product.component').then(m => m.ProductComponent) },
  { path: 'add-product', loadComponent: () => import('./product/product-form/product-form').then(m => m.ProductForm) },

  { path: 'jobs', loadComponent: () => import('./job/job.component').then(m => m.JobComponent) },
  { path: 'add-job', loadComponent: () => import('./job/add-job/add-job.component').then(m => m.AddJobComponent) },
  { path: 'update-job/:id', loadComponent: () => import('./job/update-job/update-job.component').then(u => u.UpdateJobComponent) },

  { path: '500', loadComponent: () => import('./error-pages/internal-server/internal-server.component').then(m => m.InternalServerComponent) },
  { path: '', redirectTo: 'list', pathMatch: 'full' },
  { path: '**', redirectTo: '/404', pathMatch: 'full' }
];
