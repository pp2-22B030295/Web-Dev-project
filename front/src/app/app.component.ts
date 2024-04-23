import { Component } from '@angular/core';
import {Router, RouterLink, RouterOutlet} from '@angular/router';
import {ProfileComponent} from "./Component/profile/profile.component";
import {ProfileReviewsComponent} from "./Component/profile-reviews/profile-reviews.component";
import {ProfileLibraryComponent} from "./Component/profile-library/profile-library.component";
import {NgIf} from "@angular/common";
import {UserIdService} from "./user-id.service";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ProfileComponent, ProfileReviewsComponent, ProfileLibraryComponent, RouterLink, NgIf],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'front';
  constructor(private router: Router, protected profileStatus: UserIdService ) {}

  navigateToProfileInfo() {
    this.router.navigate(['profile']);
  }

  navigateToLogin() {
    this.router.navigate(['login']);
  }
  navigateToSignIn() {
    this.router.navigate(['sign-in']);
  }

  navigateToProfile() {
    this.router.navigate(['profile']);
  }

  isActiveRemote() {
    if(this.profileStatus.getProfileStatus()){
      this.profileStatus.setProfileStatus(false)
    }
    else {
      this.profileStatus.setProfileStatus(true)
    }
  }
}
