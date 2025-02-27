import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ErrorModalComponent } from './modals/error-modal/error-modal.component';
import { ModalModule } from 'ngx-bootstrap/modal';
import { SuccessModalComponent } from './modals/success-modal/success-modal.component';


@NgModule({
  declarations: [],
  imports: [
    CommonModule, ModalModule.forRoot(), ErrorModalComponent, SuccessModalComponent
  ],
  exports: [
    ErrorModalComponent,
    SuccessModalComponent
  ]
})
export class SharedModule { }
