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
      <p class="profile-headline">Meet <span class="profile-name">{{translator.name}}</span></p>
      <p class="profile-description"><span class="profile-name"></span>{{translator.description}}</p>
      <p class="profile-learn-more"><a href="details/{{index}}">Learn More</a></p>

      <!-- <h3>
        <a [title]="translator.name + ' details'" [routerLink]="['/details', index]">
          {{ translator.name }}
        </a>
      </h3> -->
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

    .translator-img{
      border-radius:10px 10px 0 0;
      width:300px;
    }

    .profile-description, .profile-headline, .profile-learn-more{
      padding: 10px;
    }
    .profile-headline{
      font-size:18pt;
    }
  `]
})
export class TranslatorsListCardComponent {
  @Input() translator!: Translator;
  @Input() index!:Number;
}
