import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'environments/environment';

@Injectable({
  providedIn: 'root'
})
export class OrderService {

  private readonly baseUrl = `${environment.apiUrl}/api/order`;

  constructor(private http: HttpClient) { }

  getAllOrders() {
    return this.http.get(`${this.baseUrl}/orders`);
  }
  getOrderById(_id) {
    return this.http.get(`${this.baseUrl}/getOrderById/${_id}`);
  }
  addOrder(_comment) {
    return this.http.post(`${this.baseUrl}/addOrder`,_comment);
  }
  deleteOrderById(_id) {
    return this.http.delete(`${this.baseUrl}/deleteOrder/${_id}`);
  }
}
