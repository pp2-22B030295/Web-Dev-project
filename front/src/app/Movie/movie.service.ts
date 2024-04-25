import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Movie } from './Movie';

@Injectable({
  providedIn: 'root'
})
export class MovieService {

  private apiUrl = "http://127.0.0.1:8000/films/";

  constructor(private httpClient: HttpClient) { }

  getMovies(): Observable<Movie[]> {
    return this.httpClient.get<Movie[]>(this.apiUrl);
  }

  getMovie(id: number): Observable<Movie> {
    return this.httpClient.get<Movie>(`${this.apiUrl}${id}/`);
  }

  createMovie(movie: Movie): Observable<Movie> {
    return this.httpClient.post<Movie>(this.apiUrl, movie);
  }

  updateMovie(id: number, movie: Movie): Observable<Movie> {
    return this.httpClient.put<Movie>(`${this.apiUrl}${id}/`, movie);
  }

  deleteMovie(id: number): Observable<void> {
    return this.httpClient.delete<void>(`${this.apiUrl}${id}/`);
  }
}
