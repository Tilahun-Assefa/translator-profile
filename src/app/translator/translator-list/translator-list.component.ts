import { HttpErrorResponse } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { Translator } from 'src/app/_interfaces/translator';
import { ErrorHandlerService } from 'src/app/shared/services/error-handler.service';
import { TranslatorRepositoryService } from 'src/app/shared/services/translator-repository.service';
import { TranslatorCardComponent } from 'src/app/translator/translator-card/translator-card.component'

@Component({
  selector: 'app-translator-list',
  standalone: true,
  templateUrl: 'translator-list.component.html',
  styleUrls: ['translator-list.component.css'],
  imports: [TranslatorCardComponent, RouterLink]
})
export class TranslatorListComponent {
  translators!: Translator[];
  errorMessage: string = '';

  constructor(readonly translatorService: TranslatorRepositoryService, private errorHandler: ErrorHandlerService) { }

  ngOnInit(): void {
    this.getAllTranslators();
  }

  private getAllTranslators = () => {
    const apiAddress: string = 'api/translator';
    this.translatorService.getTranslators(apiAddress)
      .subscribe({
        next: (result: Translator[]) => this.translators = result,
        error: (err: HttpErrorResponse) => {
          this.errorHandler.handleError(err);
          this.errorMessage = this.errorHandler.errorMessage;
        }
      })
  }

}
