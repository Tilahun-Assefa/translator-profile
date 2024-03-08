import { Component } from '@angular/core';
import { BsModalRef } from 'ngx-bootstrap/modal';

@Component({
  selector: 'app-error-modal',
  standalone: true,
  imports: [],
  templateUrl: 'error-modal.component.html',
  styleUrls: ['error-modal.component.css']
})
export class ErrorModalComponent {
  modalHeaderText!: string;
  modalBodyText!: string;
  okButtonText!: string;
  constructor(public bsModalRef: BsModalRef) { }
  ngOnInit(): void {
  }
}
