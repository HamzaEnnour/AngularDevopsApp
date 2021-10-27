import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  private readonly baseUrl = `${environment.apiUrl}/apicategory`;

  constructor(private http: HttpClient) { }

  getAllcategorys() {
    return this.http.get(`${this.baseUrl}/categories`);
  }
  getcategoryById(_id) {
    return this.http.get(`${this.baseUrl}/category/${_id}`);
  }
  createcategory(_comment) {
    return this.http.post(`${this.baseUrl}/category`,_comment);
  }
  updatecategory(_comment,_id) {
    return this.http.put(`${this.baseUrl}/category/${_id}`,_comment);
  }
  deletecategory(_id) {
    return this.http.delete(`${this.baseUrl}/category/${_id}`);
  }
}
