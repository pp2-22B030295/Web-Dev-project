import { Component } from '@angular/core';
import {Router} from "@angular/router";
import {UserReviewService} from "../../UserReview/user-review.service";
import {ReviewService} from "../../Review/review.service";
import {UserIdService} from "../../user-id.service";

@Component({
  selector: 'app-profile-reviews',
  standalone: true,
  imports: [],
  templateUrl: './profile-reviews.component.html',
  styleUrl: './profile-reviews.component.css'
})
export class ProfileReviewsComponent {

  constructor(private router: Router,
              private user_id: UserIdService,
              private userReviewService: UserReviewService,
              private reviewService: ReviewService){}

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
