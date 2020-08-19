import { Component, OnInit } from '@angular/core';
import { ProfileService } from '../profile.service';
import { NgForm } from '@angular/forms';
import { UserProfile } from '../interfaces/userprofile';
import { Router } from '@angular/router';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css'],
})
export class EditComponent implements OnInit {
  constructor(private service: ProfileService, private router: Router) {}

  ngOnInit(): void {}

  setUserProfile(form: NgForm) {
    let newProfile: UserProfile = {
      name: form.value.name,
      contact: form.value.contact,
      bio: form.value.bio,
    };
    this.service.setUserProfile(newProfile);
    this.router.navigate(['profile']);
  }
}
