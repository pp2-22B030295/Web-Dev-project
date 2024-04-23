import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-movie-card',
  standalone: true,
  imports: [],
  templateUrl: './movie-card.component.html',
  styleUrl: './movie-card.component.css'
})
export class MovieCardComponent {
  @Input() movie: any;
}

export interface Movie {
  id: number;
  title: string;
  posterPath: string;
  rating: number;
  description: string;
}
