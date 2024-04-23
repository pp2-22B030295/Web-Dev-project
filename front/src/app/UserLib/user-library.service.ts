import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { UserLibrary } from './UserLirary';

@Injectable({
  providedIn: 'root'
})
export class UserLibraryService {

  private apiUrl = "http://127.0.0.1:8000/user-library/";

  constructor(private httpClient: HttpClient) { }

  getUserLibraries(): Observable<UserLibrary[]> {
    return this.httpClient.get<UserLibrary[]>(this.apiUrl);
  }

  createUserLibrary(userLibrary: UserLibrary): Observable<UserLibrary> {
    return this.httpClient.post<UserLibrary>(this.apiUrl, userLibrary);
  }

  updateUserLibrary(id: number, userLibrary: UserLibrary): Observable<UserLibrary> {
    return this.httpClient.put<UserLibrary>(`${this.apiUrl}${id}/`, userLibrary);
  }

  deleteUserLibrary(id: number): Observable<void> {
    return this.httpClient.delete<void>(`${this.apiUrl}${id}/`);
  }

}
