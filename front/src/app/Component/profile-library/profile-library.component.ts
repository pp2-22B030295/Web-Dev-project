import {Component, Input, OnInit} from '@angular/core';
import {Router} from "@angular/router";
import {UserLibraryService} from "../../UserLib/user-library.service";
import {Movie} from "../../Movie/Movie";
import {UserLibrary} from "../../UserLib/UserLirary";
import {UserReview} from "../../UserReview/UserReview";

@Component({
  selector: 'app-profile-library',
  standalone: true,
  imports: [],
  templateUrl: './profile-library.component.html',
  styleUrl: './profile-library.component.css',
})
export class ProfileLibraryComponent implements OnInit{
  userLibraries: UserLibrary[] = [];
  constructor(private router: Router, private userReviewService: UserLibraryService) {}
  navigateToProfileInfo() {
    this.router.navigate(['profile']);
  }
  navigateToProfileReviews() {
    this.router.navigate(['profile/reviews']);
  }
  navigateToProfileLibrary() {
    this.router.navigate(['profile/library']);
  }

  ngOnInit(): void {
    this.getUserReviews();
  }

  getUserReviews(): void {
    this.userReviewService.getUserLibraries()
      .subscribe((data: UserLibrary[]) => {
        this.userLibraries = data;
      });
  }

}
