import { Component, OnInit } from '@angular/core';
import { ProfileService } from '../profile.service';
import { UserProfile } from '../interfaces/userprofile';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css'],
})
export class ProfileComponent implements OnInit {
  profile: UserProfile;

  constructor(private service: ProfileService) {}

  ngOnInit(): void {
    this.getUserProfile();
  }

  getUserProfile() {
    this.profile = this.service.getUserProfile();
  }
}
