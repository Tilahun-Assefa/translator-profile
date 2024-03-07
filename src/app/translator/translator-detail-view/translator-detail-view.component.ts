import { CommonModule } from '@angular/common';
import { HttpErrorResponse } from '@angular/common/http';
import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Translator } from 'src/app/_interfaces/translator';
import { ErrorHandlerService } from 'src/app/shared/services/error-handler.service';
import { TranslatorRepositoryService } from 'src/app/shared/services/translator-repository.service';

@Component({
  selector: 'app-translator-detail-view',
  standalone: true,
  imports: [],
  templateUrl: 'translator-detail-view.component.html',
  styleUrls: ['translator-detail-view.component.css']
})
export class TranslatorDetailViewComponent {
  errorMessage: string = '';
  profile!: Translator;

  constructor(private profileService: TranslatorRepositoryService,
    private route: ActivatedRoute, private errorHandler: ErrorHandlerService) { }

  ngOnInit(): void {

  }
  getOwnerDetails = () => {
    const id: string = this.route.snapshot.params['index'];
    const apiUrl: string = `api/translator/${id}`;
    this.profileService.getOneTranslator(apiUrl)
      .subscribe({
        next: (result: Translator) => this.profile = result,
        error: (err: HttpErrorResponse) => {
          this.errorHandler.handleError(err);
          this.errorMessage = this.errorHandler.errorMessage;
        }
      })
  }
}
