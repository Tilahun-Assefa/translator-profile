import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TranslatorListComponent } from './translator-list/translator-list.component';
import { TranslatorCardComponent } from './translator-card/translator-card.component';
import { TranslatorDetailViewComponent } from './translator-detail-view/translator-detail-view.component';

const routes: Routes = [
  { path: '', loadComponent: () => import('../translator/translator-list/translator-list.component').then(c => c.TranslatorListComponent) },
  { path: 'details/:id', loadComponent: ()=>import('../translator/translator-detail-view/translator-detail-view.component').then(c=>c.TranslatorDetailViewComponent) }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TranslatorRoutingModule { }
