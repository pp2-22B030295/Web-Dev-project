import {Component, Input} from '@angular/core';
import {Movie} from "../../Movie/Movie";

@Component({
  selector: 'app-movie-card',
  standalone: true,
  imports: [],
  templateUrl: './movie-card.component.html',
  styleUrl: './movie-card.component.css'
})
export class MovieCardComponent {
  @Input() movie: Movie | undefined;
}
