import { Component, inject } from '@angular/core';
import { ChatService } from '../chat/chat.service';

@Component({
  selector: 'app-side-menu',
  imports: [],
  templateUrl: "side-menu.component.html",
  styleUrls: ["side-menu.component.css"]
})
export class SideMenuComponent {
  chatService = inject(ChatService);
}
