import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from './User';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private apiUrl = "http://127.0.0.1:8000/users/";

  constructor(private httpClient: HttpClient) { }

  getUsers(): Observable<User[]> {
    return this.httpClient.get<User[]>(this.apiUrl);
  }

  getUser(id: number): Observable<User> {
    return this.httpClient.get<User>(`${this.apiUrl}${id}/`);
  }

  createUser(user: User): Observable<User> {
    return this.httpClient.post<User>(this.apiUrl, user);
  }

  updateUser(id: number, user: User): Observable<User> {
    return this.httpClient.put<User>(`${this.apiUrl}${id}/`, user);
  }

  deleteUser(id: number): Observable<void> {
    return this.httpClient.delete<void>(`${this.apiUrl}${id}/`);
  }
}
