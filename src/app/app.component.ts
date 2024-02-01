import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TopBarComponent } from './top-bar/top-bar.component';

@Component({
  selector: 'app-root',
  template: ` 
    <app-top-bar/>     
    <router-outlet/>
  `,
  styles: [],
  standalone: true,
  imports: [TopBarComponent, RouterOutlet]
})
export class AppComponent {
  title = 'translator-profile';
}
