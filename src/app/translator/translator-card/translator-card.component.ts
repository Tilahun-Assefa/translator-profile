import { Component, Input, inject } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { Translator } from 'src/app/_interfaces/translator';

@Component({
  selector: 'app-translator-card',
  standalone: true,
  imports: [RouterModule],
  templateUrl: "translator-card.component.html",
  styleUrls: ['translator-card.component.css']
})
export class TranslatorCardComponent {
  @Input() translator!: Translator;
  @Input() index!: Number;


}
