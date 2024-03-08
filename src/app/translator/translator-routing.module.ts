import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: 'list', loadComponent: () => import('../translator/translator-list/translator-list.component')
  .then(c => c.TranslatorListComponent) },
  { path: 'details/:id', loadComponent: ()=>import('../translator/translator-detail-view/translator-detail-view.component')
  .then(c=>c.TranslatorDetailViewComponent) }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TranslatorRoutingModule { }
