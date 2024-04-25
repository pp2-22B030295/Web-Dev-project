import { Component } from '@angular/core';
import {NgForOf} from "@angular/common";
import {MovieService} from "../../Movie/movie.service";

class Movie {
  constructor(name: string, duration: number, category: Category[], rating: number) {
    this.duration = duration;
    this.name = name;
    this.category = category;
    this.rating = rating;
  }

  name: String | undefined;
  duration: number;
  category: Category[];
  rating: number;

}
class Category{
  constructor(name: String) {
    this.name = name;
  }
  name: String;

  public toString(){
    return ' ' + this.name;
  }
}
@Component({
  selector: 'app-browse',
  standalone: true,
  imports: [
    NgForOf
  ],
  templateUrl: './browse.component.html',
  styleUrl: './browse.component.css'
})
export class BrowseComponent {
  constructor(/**private movieService: MovieService**/) {}
  movies: Movie[] = [new Movie("Marvel", 15, [new Category("action") , new Category("horror")], 7.0), new Movie("Witch", 88, [new Category("thriller") , new Category("horror")], 8.0)];


  fantasyFilter(){

  }
  thrillerFilter(){

  }
  actionFilter(){

  }
  romanceFilter(){

  }
  horrorFilter(){

  }

  /**
  ngOnInit(): void {
    this.movieService.getMovies()
      .subscribe((data: Movie[]) => {
        this.movies = data;
      });
  }
  **/
}
