import { Injectable } from '@angular/core';
import { UserProfile } from './interfaces/userprofile';

@Injectable({
  providedIn: 'root',
})
export class ProfileService {
  profile: UserProfile = {
    name: 'Name',
    contact: 'Email',
    bio: 'Your bio',
  };

  constructor() {}

  getUserProfile() {
    return this.profile;
  }

  setUserProfile(newProfile: UserProfile) {
    this.profile = newProfile;
  }
}
