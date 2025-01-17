import { Component, inject } from '@angular/core';
import { ChatService } from './chat.service';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-chat',
  imports: [DatePipe],
  templateUrl: "chat.component.html",
  styleUrls: []
})
export class ChatComponent {
  messages = inject(ChatService).messages;
}

