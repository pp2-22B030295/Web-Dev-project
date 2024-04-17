import { Component } from '@angular/core';
import {Router, RouterLink, RouterOutlet} from '@angular/router';
import {ProfileComponent} from "./Component/profile/profile.component";
import {ProfileReviewsComponent} from "./Component/profile-reviews/profile-reviews.component";
import {ProfileLibraryComponent} from "./Component/profile-library/profile-library.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ProfileComponent, ProfileReviewsComponent, ProfileLibraryComponent, RouterLink],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'front';
  constructor(private router: Router) {}
  navigateToProfileInfo() {
    this.router.navigate(['profile']);
  }
  navigateToProfileReviews() {
    this.router.navigate(['profile/reviews']);
  }
  navigateToProfileLibrary() {
    this.router.navigate(['profile/library']);
  }
  navigateToLogin() {
    this.router.navigate(['login']);
  }
  navigateToSignIn() {
    this.router.navigate(['sign-in']);
  }
}
