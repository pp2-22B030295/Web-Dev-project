import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Category } from './Category';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  private apiUrl = "http://127.0.0.1:8000/categories/";

  constructor(private httpClient: HttpClient) { }

  getCategories(): Observable<Category[]> {
    return this.httpClient.get<Category[]>(this.apiUrl);
  }

  getCategory(id: number): Observable<Category> {
    return this.httpClient.get<Category>(`${this.apiUrl}${id}/`);
  }

  createCategory(category: Category): Observable<Category> {
    return this.httpClient.post<Category>(this.apiUrl, category);
  }

  updateCategory(id: number, category: Category): Observable<Category> {
    return this.httpClient.put<Category>(`${this.apiUrl}${id}/`, category);
  }

  deleteCategory(id: number): Observable<void> {
    return this.httpClient.delete<void>(`${this.apiUrl}${id}/`);
  }
}
