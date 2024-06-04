import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { UserProfileComponent } from './components/user-profile/user-profile.component';
import { ChatbotComponent } from './components/chatbot/chatbot.component';
import { EditProfileComponent } from './components/user-profile/edit-profile/edit-profile.component';
import { SettingComponent } from './components/user-profile/setting/setting.component';

const routes: Routes = [
  { path: '', component: ChatbotComponent, pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'userProfile', component: UserProfileComponent,
    // children: [
    //   { path: 'editProfile', component: EditProfileComponent },
    //   { path: 'setting', component: SettingComponent }
    // ]
  },
  {path: 'userprofile/edit', component: EditProfileComponent },
  {path: 'userprofile/setting', component: SettingComponent },
  { path: '**', redirectTo: '/userprofile' } // Wildcard route for a 404 page
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }



//lazy loaded
// {path : '' , loadChildren :() => import('./home/home.module').then(m => m.HomeModule)}
// { path: 'profile', loadChildren: () => import('./profile/profile.module').then(m => m.ProfileModule) },
