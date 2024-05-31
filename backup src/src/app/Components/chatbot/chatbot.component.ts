import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { GeminiApiService } from '../../Services/gemini-api.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-chatbot',
  templateUrl: './chatbot.component.html',
  styleUrl: './chatbot.component.css'
})
export class ChatbotComponent  {

  prompt: string = '' ;
  generatedText: string = '';
  messages: { text: string, isUser: boolean }[] = [];
  @Output() sendMessage = new EventEmitter<string>();

  isSidebarOpen = false;

  constructor(private geminiService: GeminiApiService,private router: Router) {}


async sendData(message: string) {
  if (message) {
    const userMessage = { text: message, isUser: true };
    this.messages.push(userMessage); 
    this.generatedText = await this.geminiService.generateText(message);
    const botMessage = { text: this.generatedText, isUser: false };
    this.messages.push(botMessage); 
  }
}

}
