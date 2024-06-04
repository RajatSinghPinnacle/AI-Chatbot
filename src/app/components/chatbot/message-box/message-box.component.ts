import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-message-box',
  templateUrl: './message-box.component.html',
  styleUrl: './message-box.component.css'
})
export class MessageBoxComponent {
  @Input() messages: { text: string, isUser: boolean }[] = [];

}
