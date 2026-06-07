import { Component, ChangeDetectionStrategy } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TopBarComponent } from './top-bar/top-bar.component';
import { PageFooterComponent } from './page-footer/page-footer.component';

@Component({
    selector: 'app-root',
    templateUrl: "app.component.html",
    styles: [],
    changeDetection: ChangeDetectionStrategy.Eager,
    imports: [TopBarComponent, RouterOutlet, PageFooterComponent]
})
export class AppComponent {
  title = 'translator-profile';
}
