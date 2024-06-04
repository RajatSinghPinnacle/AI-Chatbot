import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, UntypedFormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-edit-profile',
  templateUrl: './edit-profile.component.html',
  styleUrl: './edit-profile.component.css'
})
export class EditProfileComponent implements OnInit {
  profileForm: FormGroup | any;

  constructor(private router: Router, private fb: FormBuilder) {}

  ngOnInit(): void {
    this.profileForm = this.fb.group({
      name: ['', Validators.required],
      bio: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      phone: ['',[Validators.required, Validators.pattern('^\\+(?:[0-9] ?){6,14}[0-9]$')]],
      location: ['',Validators.required],
      photo: [null, Validators.required]
    });
  }

  goBack() {
    this.router.navigate(['userProfile']);
  }

  onSubmit() {
    if (this.profileForm.valid) {
      console.log(this.profileForm.value);
    }
  }

  setFileData(event: Event): void {
    const eventTarget: HTMLInputElement | null = event.target as HTMLInputElement | null;
    if (eventTarget?.files?.[0]) {
      const file: File = eventTarget.files[0];
      const reader = new FileReader();
      reader.addEventListener('load', () => {
        this.profileForm.get('photo')?.setValue(reader.result as any);
      });
      reader.readAsDataURL(file);
    }
  }

  clearFileInput() {
    this.profileForm.get('photo')?.setValue(null);
  }
}