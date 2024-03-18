import { CommonModule } from '@angular/common';
import { HttpErrorResponse } from '@angular/common/http';
import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ErrorHandlerService } from 'src/app/shared/services/error-handler.service';
import { TranslatorRepositoryService } from 'src/app/shared/services/translator-repository.service';
import { TranslationOrdersComponent } from "./translation-orders/translation-orders.component";
import { TranslationOrder } from 'src/app/_interfaces/translation-order';
import { AppendDirective } from 'src/app/shared/directives/append.directive';
import { Translator } from 'src/app/_interfaces/translator';

@Component({
    selector: 'app-translator-detail-view',
    standalone: true,
    templateUrl: 'translator-detail-view.component.html',
    styleUrls: ['translator-detail-view.component.css'],
    imports: [CommonModule, TranslationOrdersComponent, AppendDirective]
})
export class TranslatorDetailViewComponent {
  errorMessage: string = '';
  translator!: Translator;
  orders: TranslationOrder[] = [];

  constructor(private translatorRepository: TranslatorRepositoryService,
    private route: ActivatedRoute,
    private errorHandler: ErrorHandlerService
    ) { }

  ngOnInit(): void {
    const id: string = this.route.snapshot.params['id'];
    this.getTranslatorDetails(id);
  }
  getTranslatorDetails = (id: string) => {
    const apiUrl: string = `api/translator/${id}`;
    this.translatorRepository.getOneTranslator(apiUrl)
      .subscribe({
        next: (result: Translator) => this.translator = result,
        error: (err: HttpErrorResponse) => {
          this.errorHandler.handleError(err);
          this.errorMessage = this.errorHandler.errorMessage;
        }
      })
  }

  getTranslationOrders= (id: string)=>{
    const apiUrl: string = `api/translationOrdersByTranslatorId/${id}`;
    //To do TranslationOrder repository
  }

  printToConsole= (param: TranslationOrder) => {
    console.log('Account parameter from the child component', param)
  }
}
