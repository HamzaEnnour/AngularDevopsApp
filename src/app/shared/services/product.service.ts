import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private readonly baseUrl = `${environment.apiUrl}/apiproduct`;

  constructor(private http: HttpClient) { }

  getAllproducts() {
    return this.http.get(`${this.baseUrl}/categories`);
  }
  getproductById(_id) {
    return this.http.get(`${this.baseUrl}/product/${_id}`);
  }
  createproduct(_comment) {
    return this.http.post(`${this.baseUrl}/product`,_comment);
  }
  updateproduct(_comment,_id) {
    return this.http.put(`${this.baseUrl}/product/${_id}`,_comment);
  }
  deleteproduct(_id) {
    return this.http.delete(`${this.baseUrl}/product/${_id}`);
  }
}
