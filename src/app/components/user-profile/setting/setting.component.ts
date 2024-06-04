import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-setting',
  templateUrl: './setting.component.html',
  styleUrl: './setting.component.css'
})
export class SettingComponent {
  constructor(private router: Router) {}

  goBack() {
    this.router.navigate(['userProfile']);
  }
}
