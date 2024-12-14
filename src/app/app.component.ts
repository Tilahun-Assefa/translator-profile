import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TopBarComponent } from './top-bar/top-bar.component';
import { PageFooterComponent } from './page-footer/page-footer.component';

@Component({
    selector: 'app-root',
    templateUrl: "app.component.html",
    styles: [],
    imports: [TopBarComponent, RouterOutlet, PageFooterComponent]
})
export class AppComponent {
  title = 'translator-profile';
}
