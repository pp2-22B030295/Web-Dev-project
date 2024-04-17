import { Component } from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-profile-reviews',
  standalone: true,
  imports: [],
  templateUrl: './profile-reviews.component.html',
  styleUrl: './profile-reviews.component.css'
})
export class ProfileReviewsComponent {
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
}
