import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { MovieCategory } from './MovieCategory';

@Injectable({
  providedIn: 'root'
})
export class MovieCategoryService {

  private apiUrl = "http://127.0.0.1:8000/film-categories/";

  constructor(private httpClient: HttpClient) { }

  getMovieCategories(): Observable<MovieCategory[]> {
    return this.httpClient.get<MovieCategory[]>(this.apiUrl);
  }

  getMovieCategory(id: number): Observable<MovieCategory> {
    return this.httpClient.get<MovieCategory>(`${this.apiUrl}${id}/`);
  }

  createMovieCategory(movieCategory: MovieCategory): Observable<MovieCategory> {
    return this.httpClient.post<MovieCategory>(this.apiUrl, movieCategory);
  }

  updateMovieCategory(id: number, movieCategory: MovieCategory): Observable<MovieCategory> {
    return this.httpClient.put<MovieCategory>(`${this.apiUrl}${id}/`, movieCategory);
  }

  deleteMovieCategory(id: number): Observable<void> {
    return this.httpClient.delete<void>(`${this.apiUrl}${id}/`);
  }
}
