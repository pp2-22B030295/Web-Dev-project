import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { UserReview } from './UserReview';

@Injectable({
  providedIn: 'root'
})
export class UserReviewService {

  private apiUrl = "http://127.0.0.1:8000/user-reviews/";

  constructor(private httpClient: HttpClient) { }

  getUserReviews(): Observable<UserReview[]> {
    return this.httpClient.get<UserReview[]>(this.apiUrl);
  }

  getUserReview(id: number): Observable<UserReview> {
    return this.httpClient.get<UserReview>(`${this.apiUrl}${id}/`);
  }

  createUserReview(userReview: UserReview): Observable<UserReview> {
    return this.httpClient.post<UserReview>(this.apiUrl, userReview);
  }

  updateUserReview(id: number, userReview: UserReview): Observable<UserReview> {
    return this.httpClient.put<UserReview>(`${this.apiUrl}${id}/`, userReview);
  }

  deleteUserReview(id: number): Observable<void> {
    return this.httpClient.delete<void>(`${this.apiUrl}${id}/`);
  }
}
