import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
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

  constructor(private router: Router) { }

  public redirectToUpdatePage = (id: string) => {
    const updateUrl: string = `/auth/update/${id}`;
    this.router.navigate([updateUrl]);
  }

  public redirectToDeletePage = (id: string) => {
    const deleteUrl: string = `/auth/delete/${id}`;
    this.router.navigate([deleteUrl]);
  }
}
