import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TopBarComponent } from './top-bar/top-bar.component';
import { MenuComponent } from "./menu/menu.component";

@Component({
    selector: 'app-root',
    templateUrl:"app.component.html",
    styles: [],
    standalone: true,
    imports: [TopBarComponent, RouterOutlet, MenuComponent]
})
export class AppComponent {
  title = 'translator-profile';
}
