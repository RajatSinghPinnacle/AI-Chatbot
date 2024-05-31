import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './Components/home/home.component';
import { UserProfileComponent } from './Components/user-profile/user-profile.component';
import { ChatbotComponent } from './Components/chatbot/chatbot.component';
import { HeaderComponent } from './Components/header/header.component';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { MaterialModule } from './Modules/material/material.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MessageBoxComponent } from './Components/chatbot/message-box/message-box.component';
import { InputBoxComponent } from './Components/chatbot/input-box/input-box.component';
import { EditProfileComponent } from './Components/user-profile/edit-profile/edit-profile.component';
import { SettingComponent } from './Components/user-profile/setting/setting.component';
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
    ReactiveFormsModule
  ],
  providers: [
    provideAnimationsAsync()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
