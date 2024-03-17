import { DatePipe } from '@angular/common';
import { HttpErrorResponse } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { BsModalRef, BsModalService, ModalOptions } from 'ngx-bootstrap/modal';
import { Translator } from 'src/app/_interfaces/translator';
import { TranslatorUpdateForm } from 'src/app/_interfaces/translator-update-form';
import { SuccessModalComponent } from 'src/app/shared/modals/success-modal/success-modal.component';
import { ErrorHandlerService } from 'src/app/shared/services/error-handler.service';
import { TranslatorRepositoryService } from 'src/app/shared/services/translator-repository.service';

@Component({
  selector: 'app-translator-update',
  standalone: true,
  imports: [ReactiveFormsModule, DatePipe],
  templateUrl: 'translator-update.component.html',
  styleUrls: ['translator-update.component.css']
})
export class TranslatorUpdateComponent {
  translator!: Translator;
  errorMessage: string = '';
  translatorUpdateForm!: FormGroup<TranslatorUpdateForm>;
  bsModalRef?: BsModalRef;
  roles: string[] = ['Admin', 'Translator'];

  constructor(private fb: FormBuilder, private repository: TranslatorRepositoryService, private errorHandler: ErrorHandlerService,
    private router: Router, private activeRoute: ActivatedRoute, private datePipe: DatePipe,
    private modal: BsModalService) { }

  ngOnInit(): void {
    this.translatorUpdateForm = this.fb.group<TranslatorUpdateForm>({
      first_name: new FormControl('', [Validators.required, Validators.minLength(3)]),
      last_name: new FormControl('', Validators.required),
      email: new FormControl('', Validators.required),
      password: new FormControl('', Validators.required),
      verify_password: new FormControl('', Validators.required),
      telephone: new FormControl('', Validators.required),
      address: new FormControl('', Validators.required),
      bio: new FormControl(''),
      start_date: new FormControl(new Date(), Validators.required),
      activity_status: new FormControl(true, Validators.required),
      role: new FormControl('', Validators.required),
      image_url: new FormControl('', Validators.required),
    });

    this.getTranslatorById();
  }

  private getTranslatorById = () => {
    const translatorId: string = this.activeRoute.snapshot.params['id'];
    const translatorByIdUri: string = `api/translator/${translatorId}`;

    this.repository.getOneTranslator(translatorByIdUri)
      .subscribe({
        next: (trans: Translator) => {
          this.translator = {
            ...trans,
            start_date: trans.start_date
          };
          this.translatorUpdateForm.patchValue(this.translator);
        },
        error: (err: HttpErrorResponse) => this.errorHandler.handleError(err)
      })
  }

  validateControl = (controlName: string) => {
    if (this.translatorUpdateForm?.get(controlName)?.invalid && this.translatorUpdateForm?.get(controlName)?.touched)
      return true;

    return false;
  }

  hasError = (controlName: string, errorName: string) => {
    if (this.translatorUpdateForm?.get(controlName)?.hasError(errorName)) {
      return true;
    }
    return false;
  }

  public updateTranslator = (translatorUpdateFormValue: any) => {
    if (this.translatorUpdateForm.valid){
      this.executeOwnerUpdate(translatorUpdateFormValue);}
  }

  private executeOwnerUpdate = (translatorUpdateFormValue: TranslatorUpdateForm) => {
    const translatorForUpd: Translator = {
      id: this.translator.id,
      first_name: translatorUpdateFormValue.first_name.value ,
      last_name: translatorUpdateFormValue.last_name.value ,
      email: translatorUpdateFormValue.email.value ,
      password: translatorUpdateFormValue.password.value ,
      bio: translatorUpdateFormValue.bio.value ,
      activity_status: translatorUpdateFormValue.activity_status?.value ,
      start_date: translatorUpdateFormValue.start_date.value,
      image_url: translatorUpdateFormValue.image_url?.value ,
      address: translatorUpdateFormValue.address?.value
    }

    const apiUri: string = `api/translator/${this.translator?.id}`;

    this.repository.updateTranslator(apiUri, translatorForUpd)
      .subscribe({
        next: (_) => {
          const config: ModalOptions = {
            initialState: {
              modalHeaderText: 'Success Message',
              modalBodyText: 'Owner updated successfully',
              okButtonText: 'OK'
            }
          };

          this.bsModalRef = this.modal.show(SuccessModalComponent, config);
          this.bsModalRef.content.redirectOnOk.subscribe((_: any) => this.redirectToTranslatorList());
        },
        error: (err: HttpErrorResponse) => this.errorHandler.handleError(err)
      })
  }

  public redirectToTranslatorList = () => {
    this.router.navigate(['/translator/list']);
  }
}
