import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Translator } from './profile.service';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-translators-list-card',
  standalone: true,
  imports: [CommonModule, RouterModule],
  template: `
    <article class="profile-card">
      <img class="translator-img" src="{{translator.photoUrl}}" alt="photo of {{translator.name}}"/>
      <p class="profile-headline">Meet <span class="">{{translator.name}}</span></p>
      <p class="">{{translator.description}}</p>
      <p class="profile-learn-more"><a href="details/{{index}}">Learn More</a></p>
    </article>
  `,
  styles: [`
    .profile-card{
      display: flex;
      flex-direction:column;
      border-radius:10px;
      box-shadow:rgba(0,0,0,0.16) 0px 10px 36px 0px, rgba(0,0,0,0.06) 0px 0px 0px 1px;
      width:300px;
    }
  `]
})
export class TranslatorsListCardComponent {
  @Input() translator!: Translator;
  @Input() index!:Number;
}
