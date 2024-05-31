import { Injectable } from '@angular/core';
import { GoogleGenerativeAI } from '@google/generative-ai';

@Injectable({
  providedIn: 'root'
})
export class GeminiApiService {

  private generativeApi: GoogleGenerativeAI;
  constructor() { 
    this.generativeApi = new GoogleGenerativeAI('AIzaSyCAqZdDR2R3cZSBioIUB9vaFRRzdKmlydE');
  }
  async generateText(prompt: string){
    const model = this.generativeApi.getGenerativeModel({model: 'gemini-pro'});
    const result = await model.generateContent(prompt);
    const response = await result.response;
    const text = response.text();
    console.log(text);
    return text;
  }
}
