import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrl: './user-profile.component.css'
})
export class UserProfileComponent {
  constructor(private router: Router) {}
  navigateToEditProfile() {
    this.router.navigate(['userprofile/edit']);
  }

  navigateToSettings() {
    this.router.navigate(['userprofile/setting']);
  }
}
