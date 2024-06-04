import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { UserProfileComponent } from './components/user-profile/user-profile.component';
import { ChatbotComponent } from './components/chatbot/chatbot.component';
import { HeaderComponent } from './components/header/header.component';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { MaterialModule } from './modules/material/material.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MessageBoxComponent } from './components/chatbot/message-box/message-box.component';
import { InputBoxComponent } from './components/chatbot/input-box/input-box.component';
import { EditProfileComponent } from './components/user-profile/edit-profile/edit-profile.component';
import { SettingComponent } from './components/user-profile/setting/setting.component';
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    UserProfileComponent,
    ChatbotComponent,
    HeaderComponent,
    MessageBoxComponent,
    InputBoxComponent,
    EditProfileComponent,
    SettingComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [
    provideAnimationsAsync()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
