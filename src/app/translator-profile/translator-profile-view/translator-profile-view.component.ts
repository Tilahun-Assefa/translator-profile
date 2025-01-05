import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProfileService, Translator } from '../profile.service';
import { Observable, map } from 'rxjs';
import { ActivatedRoute } from '@angular/router';

@Component({
    selector: 'app-translator-profile-view',
    imports: [CommonModule],
    templateUrl: 'translator-profile-view.component.html',
    styleUrls: ['translator-profile-view.component.css']
})
export class TranslatorProfileViewComponent implements OnInit {

  translatorProfile$: Observable<Translator> | undefined;
  profile: any;

  constructor(private profileService: ProfileService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.translatorProfile$ = this.route.paramMap
      .pipe(
        map(params => {
          return this.profileService.profiles[Number(params.get('index'))]
        })
      );
  }

  addToCart(translator: Translator) {
    window.alert('Your product has been added to the cart!');
  }
}
