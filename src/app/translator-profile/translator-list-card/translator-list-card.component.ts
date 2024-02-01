import { Component, Input } from '@angular/core';

import { Translator } from '../profile.service';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-translators-list-card',
  standalone: true,
  imports: [RouterModule],
  templateUrl: 'translator-list-card.component.html',
  styleUrls: ['translator-list-card.component.css']
})
export class TranslatorListCardComponent {
  @Input() translator!: Translator;
  @Input() index!: Number;
}
