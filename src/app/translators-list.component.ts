import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProfileService } from './profile.service';
import { TranslatorsListCardComponent } from './translators-list-card.component';

@Component({
  selector: 'app-translators-list',
  standalone: true,
  imports: [CommonModule, TranslatorsListCardComponent],
  template: `
    <section class="profile-section">
      <h2 class="profile-text">Translators List</h2>
    </section>
    <article class="translator-list">
      <app-translators-list-card *ngFor="let translator of translatorService.profiles; let i=index" [index]="i" [translator]="translator">
      </app-translators-list-card>
      <!-- <ul>
        <li *ngFor="let translator of translatorService.profiles">
          {{translator.name}}
          <p>{{translator.description}}</p>
        </li>
      </ul> -->
    </article>
  `,
  styles: [
  ]
})
export class TranslatorsListComponent {

  constructor(readonly translatorService: ProfileService) { }
}
