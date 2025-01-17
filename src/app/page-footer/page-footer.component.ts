import { afterNextRender, Component, inject, signal } from '@angular/core';
import { HeartbeatService } from '../loader/heartbeat.service';

@Component({
    selector: 'app-page-footer',
    imports: [],
    templateUrl: "page-footer.component.html",
    styleUrls: []
})
export class PageFooterComponent {
    readonly isHydrated = signal(false);
    readonly apiReachable = inject(HeartbeatService).status;

    constructor() {
        afterNextRender(() => this.isHydrated.set(true));
    }
}
