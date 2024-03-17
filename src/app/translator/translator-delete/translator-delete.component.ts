import { DatePipe } from '@angular/common';
import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { BsModalRef, BsModalService, ModalOptions } from 'ngx-bootstrap/modal';
import { Translator } from 'src/app/_interfaces/translator';
import { SuccessModalComponent } from 'src/app/shared/modals/success-modal/success-modal.component';
import { ErrorHandlerService } from 'src/app/shared/services/error-handler.service';
import { TranslatorRepositoryService } from 'src/app/shared/services/translator-repository.service';

@Component({
  selector: 'app-translator-delete',
  standalone: true,
  imports: [DatePipe],
  templateUrl: 'translator-delete.component.html',
  styleUrls: ['translator-delete.component.css']
})
export class TranslatorDeleteComponent implements OnInit {
  translator!: Translator;
  bsModalRef?: BsModalRef;
  constructor(private repository: TranslatorRepositoryService, private errorHandler: ErrorHandlerService,
    private router: Router, private activeRoute: ActivatedRoute, private modal: BsModalService) { }

  ngOnInit(): void {
    this.getTranslatorById();
  }

  private getTranslatorById = () => {
    const translatorId: string = this.activeRoute.snapshot.params['id'];
    const apiUri: string = `api/translator/${translatorId}`;

    this.repository.getOneTranslator(apiUri)
      .subscribe({
        next: (tr: Translator) => this.translator = tr,
        error: (err: HttpErrorResponse) => this.errorHandler.handleError(err)
      })
  }

  redirectToTranslatorList = () => {
    this.router.navigate(['/translator/list']);
  }

  deleteTranslator = () => {
    const deleteUri: string = `api/translator/${this.translator.id}`;

    this.repository.deleteTranslator(deleteUri)
      .subscribe({
        next: (_) => {
          const config: ModalOptions = {
            initialState: {
              modalHeaderText: 'Success Message',
              modalBodyText: `Translator deleted successfully`,
              okButtonText: 'OK'
            }
          };

          this.bsModalRef = this.modal.show(SuccessModalComponent, config);
          this.bsModalRef.content.redirectOnOk.subscribe((_: any) => this.redirectToTranslatorList());
        },
        error: (err: HttpErrorResponse) => this.errorHandler.handleError(err)
      })
  }
}
