import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TranslatorsListComponent } from './translators-list.component';
import { TranslatorProfileViewComponent } from './translator-profile-view.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'list' },
  { path: 'list', component: TranslatorsListComponent },
  { path: 'details/:index', component: TranslatorProfileViewComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
