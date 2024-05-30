import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './Components/home/home.component';
import { UserProfileComponent } from './Components/user-profile/user-profile.component';
import { ChatbotComponent } from './Components/chatbot/chatbot.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'userProfile', component: UserProfileComponent },
  { path: 'chatbot', component: ChatbotComponent },

  //lazy loaded
  // {path : '' , loadChildren :() => import('./home/home.module').then(m => m.HomeModule)}
  // { path: 'profile', loadChildren: () => import('./profile/profile.module').then(m => m.ProfileModule) },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
