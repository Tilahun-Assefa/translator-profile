import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TranslatorListComponent } from './translator-list/translator-list.component';

const routes: Routes = [
  { path:'list', component: TranslatorListComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TranslatorRoutingModule { }
