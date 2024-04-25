import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";
import {UserLibraryService} from "../../UserLib/user-library.service";
import {UserLibrary} from "../../UserLib/UserLirary";
import {NgForOf} from "@angular/common";
import {MovieService} from "../../Movie/movie.service";
import {Movie} from "../../Movie/Movie";
import {UserIdService} from "../../UserIdService";

@Component({
  selector: 'app-profile-library',
  standalone: true,
  imports: [
    NgForOf
  ],
  templateUrl: './profile-library.component.html',
  styleUrl: './profile-library.component.css',
})
export class ProfileLibraryComponent implements OnInit{
  userLibraries: UserLibrary[] = [];
  movies: Movie[] = [];
  constructor(private router: Router,
              private userReviewService: UserLibraryService,
              private movieService: MovieService,
              private userIdService: UserIdService) {}

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
    this.getUserLibraries();
    this.getUserMovies()
  }

  getUserLibraries(): void {
    this.userReviewService.getUserLibraries()
      .subscribe((data: UserLibrary[]) => {
        this.userLibraries = data;
      });
  }

  getUserMovies(): void {
    for(let i of this.userLibraries){
      if(i.user == this.userIdService.getUserId())
          this.movieService.getMovie(i.film)
            .subscribe((data: Movie) => {
              this.movies.push(data)
            });
    }
  }


}
