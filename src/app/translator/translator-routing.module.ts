import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: 'list', loadComponent: () => import('../translator/translator-list/translator-list.component')
  .then(c => c.TranslatorListComponent) },
  { path: 'details/:id', loadComponent: ()=>import('../translator/translator-detail-view/translator-detail-view.component')
  .then(c=>c.TranslatorDetailViewComponent) },
  { path: 'create', loadComponent: () => import('../translator/translator-create/translator-create.component')
  .then(c => c.TranslatorCreateComponent) },
  { path: 'update/:id', loadComponent: () => import('../translator/translator-update/translator-update.component')
  .then(c => c.TranslatorUpdateComponent) },
  { path: 'delete/:id', loadComponent: () => import('../translator/translator-delete/translator-delete.component')
  .then(c => c.TranslatorDeleteComponent) },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TranslatorRoutingModule { }
