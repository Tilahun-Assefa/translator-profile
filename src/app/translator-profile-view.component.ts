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
    <p>
      translator-profile-view works!
    </p>
  `,
  styles: [
  ]
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
