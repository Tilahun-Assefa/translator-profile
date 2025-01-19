import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
    selector: 'app-top-bar',
    imports: [RouterLink, RouterLinkActive],
    templateUrl: 'top-bar.component.html',
    styleUrls: ['top-bar.component.css']
})
export class TopBarComponent {
  navbarEl = document.querySelector(".navbar");
}
