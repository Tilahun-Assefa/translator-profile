import { Component, ChangeDetectionStrategy } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
    selector: 'app-top-bar',
    imports: [RouterLink, RouterLinkActive],
    templateUrl: 'top-bar.component.html',
    changeDetection: ChangeDetectionStrategy.Eager,
    styleUrls: ['top-bar.component.css']
})
export class TopBarComponent {
  navbarEl = document.querySelector(".navbar");
}
