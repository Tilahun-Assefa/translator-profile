import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Translator } from 'src/app/_interfaces/translator';

@Component({
  selector: 'app-translator-card',
  standalone: true,
  imports: [RouterModule, CommonModule],
  templateUrl: "translator-card.component.html",
  styleUrls: ['translator-card.component.css']
})
export class TranslatorCardComponent {
  @Input() translator!: Translator;
  @Input() index!: Number;


}
