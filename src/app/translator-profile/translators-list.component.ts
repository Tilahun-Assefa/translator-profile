import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProfileService } from './profile.service';
import { TranslatorListCardComponent } from './translator-list-card/translator-list-card.component';

@Component({
  selector: 'app-translators-list',
  standalone: true,
  imports: [CommonModule, TranslatorListCardComponent],
  templateUrl: 'translators-list.component.html',
  styleUrls: ['translators-list.component.css']
})
export class TranslatorsListComponent {

  constructor(readonly translatorService: ProfileService) { }
}
