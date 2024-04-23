import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Review } from './Review';

@Injectable({
  providedIn: 'root'
})
export class ReviewService {

  private apiUrl = "http://127.0.0.1:8000/reviews/";

  constructor(private httpClient: HttpClient) { }

  getReviews(): Observable<Review[]> {
    return this.httpClient.get<Review[]>(this.apiUrl);
  }

  getReview(id: number): Observable<Review> {
    return this.httpClient.get<Review>(`${this.apiUrl}${id}/`);
  }

  createReview(review: Review): Observable<Review> {
    return this.httpClient.post<Review>(this.apiUrl, review);
  }

  updateReview(id: number, review: Review): Observable<Review> {
    return this.httpClient.put<Review>(`${this.apiUrl}${id}/`, review);
  }

  deleteReview(id: number): Observable<void> {
    return this.httpClient.delete<void>(`${this.apiUrl}${id}/`);
  }
}
