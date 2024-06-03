import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
// import  userProfile from './json-data/user_profile.json';
import { UserProfileService } from '../../services/user-profile.service';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrl: './user-profile.component.css'
})
export class UserProfileComponent implements OnInit {
  userProfile: any;

  constructor(private router: Router , private http : HttpClient, private userProfileService : UserProfileService) {}

  ngOnInit(){
    this.userProfileService.getUserProfile().subscribe(data => {
      this.userProfile = data;
      console.log(this.userProfile); // You can do further processing here
    });
  }

  navigateToEditProfile() {
    this.router.navigate(['userprofile/edit']);
  }

  navigateToSettings() {
    this.router.navigate(['userprofile/setting']);
  }
}
