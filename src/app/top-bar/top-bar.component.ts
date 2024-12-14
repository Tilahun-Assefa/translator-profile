import { Component } from '@angular/core';

import { RouterLink, RouterLinkActive } from '@angular/router';
import { MenuComponent } from './menu/menu.component';

@Component({
    selector: 'app-top-bar',
    imports: [RouterLink, RouterLinkActive, MenuComponent],
    templateUrl: 'top-bar.component.html',
    styleUrls: ['top-bar.component.css']
})
export class TopBarComponent {
  navbarEl = document.querySelector(".navbar");
}
