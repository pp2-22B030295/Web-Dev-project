import { Component } from '@angular/core';
import {Router} from "@angular/router";
import {Movie} from "../../Movie/Movie";
import {MovieService} from "../../Movie/movie.service";
import {UserLibraryService} from "../../UserLib/user-library.service";
import {UserIdService} from "../../user-id.service";
import {UserLibrary} from "../../UserLib/UserLirary";
import {MovieCardComponent} from "../movie-card/movie-card.component";
import {NgForOf} from "@angular/common";

@Component({
  selector: 'app-profile-library',
  standalone: true,
  imports: [
    MovieCardComponent,
    NgForOf
  ],
  templateUrl: './profile-library.component.html',
  styleUrl: './profile-library.component.css'
})
export class ProfileLibraryComponent {
  movies: Movie[] = [];
  constructor(private router: Router,
              private user_id: UserIdService,
              private userLibraryService: UserLibraryService,
              private moviesService: MovieService){}

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
    this.userLibraryService.getUserLibraries().subscribe((data: UserLibrary[]) => {
      for (let item of data) {
        if (this.user_id.getUserId() === item.user) {
          this.moviesService.getMovie(item.film).subscribe((movie: Movie) => {
            this.movies.push(movie); // Add fetched movie to the array
          });
        }
      }
    });
  }


}
