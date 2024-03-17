import { DatePipe } from '@angular/common';
import { HttpErrorResponse } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { BsModalRef, BsModalService, ModalOptions } from 'ngx-bootstrap/modal';
import { Translator } from 'src/app/_interfaces/translator';
import { TranslatorCreateDto } from 'src/app/_interfaces/translator-create-dto';
import { TranslatorCreateForm } from 'src/app/_interfaces/translator-create-form';
import { SuccessModalComponent } from 'src/app/shared/modals/success-modal/success-modal.component';
import { ErrorHandlerService } from 'src/app/shared/services/error-handler.service';
import { TranslatorRepositoryService } from 'src/app/shared/services/translator-repository.service';

@Component({
  selector: 'app-translator-create',
  standalone: true,
  imports: [ReactiveFormsModule, DatePipe],
  templateUrl: 'translator-create.component.html',
  styleUrls: ['translator-create.component.css']
})
export class TranslatorCreateComponent {
  errorMessage: string = '';
  translatorCreateForm!: FormGroup<TranslatorCreateForm>;
  bsModalRef?: BsModalRef;
  roles: string[] = ['Admin', 'Translator'];

  constructor(private fb: FormBuilder, private repository: TranslatorRepositoryService, private errorHandler: ErrorHandlerService,
    private router: Router, private datePipe: DatePipe, private modal: BsModalService) { }

  ngOnInit(): void {
    this.translatorCreateForm = this.fb.group<TranslatorCreateForm>({
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
  }

  validateControl = (controlName: string) => {
    if (this.translatorCreateForm?.get(controlName)?.invalid && this.translatorCreateForm?.get(controlName)?.touched) {
      return true;
    }
    return false;
  }

  hasError = (controlName: string, errorName: string) => {
    if (this.translatorCreateForm?.get(controlName)?.hasError(errorName)) { return true; }
    return false;
  }

  onSubmit = (translatorFormValue: any) => {
    if (this.translatorCreateForm?.valid) {
      this.executeTranslatorCreation(translatorFormValue);
    }
  }

  private executeTranslatorCreation = (translatorFormValue: TranslatorCreateForm) => {
    const translator: TranslatorCreateDto = {
      first_name: translatorFormValue.first_name.value ,
      last_name: translatorFormValue.last_name.value ,
      email: translatorFormValue.email.value ,
      password: translatorFormValue.password.value ,
      bio: translatorFormValue.bio.value ,
      activity_status: translatorFormValue.activity_status?.value ,
      start_date: translatorFormValue.start_date.value,
      image_url: translatorFormValue.image_url?.value ,
      address: translatorFormValue.address?.value
    }
    const apiUrl = 'api/translator';
    this.repository.createTranslator(apiUrl, translator)
      .subscribe({
        next: (translator: Translator) => {
          const config: ModalOptions = {
            initialState: {
              modalHeaderText: 'Success Message',
              modalBodyText: `Owner: ${translator.first_name} created successfully`,
              okButtonText: 'OK'
            }
          };
          this.bsModalRef = this.modal.show(SuccessModalComponent, config);
          this.bsModalRef.content.redirectOnOk.subscribe((_: any) => this.redirectToTranslatorList());
        },
        error: (err: HttpErrorResponse) => {
          this.errorHandler.handleError(err);
          this.errorMessage = this.errorHandler.errorMessage;
        }
      })
  }

  redirectToTranslatorList = () => {
    this.router.navigate(['/translator/list']);
  }
}