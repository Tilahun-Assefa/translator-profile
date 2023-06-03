import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProfileService, Translator } from './profile.service';
import { Observable, map } from 'rxjs';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-translator-profile-view',
  standalone: true,
  imports: [CommonModule],
  template: `
    <article class="details-panel" *ngIf="(translatorProfile$ | async) as profile">
      <img class="main-img" src="{{profile.photoUrl}}" alt="Photo of {{profile.name}}"/>
      <section>
        <h1 class="main-text">Hi, {{profile.name}}</h1>
        <h2>Address: <span class="emphasize">{{profile.address}}</span></h2>
        <p>{{profile.description}}</p>
      </section>
    </article>
  `,
  styles: [`
  .details-panel{
    display:flex;
    padding:10px;
    gap:50px;
  }

  .main-img{
    border-radius: 10px;
    width: 400px;
  }

  .main-text{
    font-size: 34pt;
    marigin-bottom: 20px;
  }

  .emphasize{
    font-weight:bold;
  }
  `]
})
export class TranslatorProfileViewComponent implements OnInit {

  translatorProfile$: Observable<Translator> | undefined;

  constructor(private profileService: ProfileService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.translatorProfile$ = this.route.paramMap
      .pipe(
        map(params => {
          return this.profileService.profiles[Number(params.get('index'))]
        })
      );
  }
}
