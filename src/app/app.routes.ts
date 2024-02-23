import { Routes } from '@angular/router';
import { TranslatorsListComponent } from './translator-profile/translators-list.component';

export const routes: Routes = [
    { path: 'list', component: TranslatorsListComponent },
    { path: 'details/:index', loadComponent: () => import('./translator-profile/translator-profile-view/translator-profile-view.component').then(m => m.TranslatorProfileViewComponent) },
    { path: 'cart', loadComponent: () => import('./cart/cart.component').then(m => m.CartComponent) },
    { path: 'shipping', loadComponent: () => import('./shipping/shipping.component').then(m => m.ShippingComponent) },
    { path: 'pokemon', loadComponent: () => import('./pokemon/pokemon.component').then(m => m.PokemonComponent) },
    { path: '', pathMatch: 'full', redirectTo: 'list' }
];
