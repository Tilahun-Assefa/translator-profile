import { Component, ChangeDetectionStrategy } from '@angular/core';

import { ProfileService } from './profile.service';
import { TranslatorListCardComponent } from './translator-list-card/translator-list-card.component';

@Component({
    selector: 'app-translators-list',
    imports: [TranslatorListCardComponent],
    templateUrl: 'translators-list.component.html',
    changeDetection: ChangeDetectionStrategy.Eager,
    styleUrls: ['translators-list.component.css']
})
export class TranslatorsListComponent {

  constructor(readonly translatorService: ProfileService) { }
}
