import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-input-box',
  templateUrl: './input-box.component.html',
  styleUrl: './input-box.component.css'
})
export class InputBoxComponent {
  prompt: string = '';

  @Output() sendMessage = new EventEmitter<string>();
  send() {
    if (this.prompt.trim() !== '') {
      this.sendMessage.emit(this.prompt);
      this.prompt = '';
    }
  }
}
