import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Translator } from '../profile.service';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-translators-list-card',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: 'translator-list-card.component.html',
  styleUrls: ['translator-list-card.component.css']
})
export class TranslatorListCardComponent {
  @Input() translator!: Translator;
  @Input() index!:Number;
}
