import { Component, EventEmitter, OnInit } from '@angular/core';
import { BsModalRef } from 'ngx-bootstrap/modal';

@Component({
    selector: 'app-success-modal',
    imports: [],
    templateUrl: 'success-modal.component.html',
    styleUrls: ['success-modal.component.css']
})
export class SuccessModalComponent implements OnInit {
  modalHeaderText: string | undefined;
  modalBodyText!: string;
  okButtonText!: string;
  redirectOnOk: EventEmitter<any> = new EventEmitter();
  constructor(private bsModalRef: BsModalRef) { }
  ngOnInit(): void {
  }
  onOkClicked = () => {
    this.redirectOnOk.emit();
    this.bsModalRef.hide();
  }
}
