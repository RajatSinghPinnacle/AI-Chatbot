import { Injectable } from '@angular/core';
import { GoogleGenerativeAI } from '@google/generative-ai';
import { Observable, from } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GeminiApiService {

  private generativeApi: GoogleGenerativeAI;
  constructor() { 
    this.generativeApi = new GoogleGenerativeAI('AIzaSyCAqZdDR2R3cZSBioIUB9vaFRRzdKmlydE');
  }
  // async generateText(prompt: string){
  //   const model = this.generativeApi.getGenerativeModel({model: 'gemini-pro'});
  //   const result = await model.generateContent(prompt);
  //   const response = await result.response;
  //   const text = response.text();
  //   console.log(text);
  //   return text;
  // }

  generateText(prompt: string): Observable<string> {
    const model = this.generativeApi.getGenerativeModel({ model: 'gemini-pro' });
    return from(model.generateContent(prompt).then(result => result.response.text()));
  }
}
