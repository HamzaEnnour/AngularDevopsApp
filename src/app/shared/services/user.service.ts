import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UserService {

    private readonly baseUrl = `${environment.apiUrl}/api/test`;
    private readonly baseUrlAuth = `${environment.apiUrl}/api/user`;

  constructor(private http: HttpClient) { }

  getAllUsers() {
    return this.http.get(`${this.baseUrl}/Users`);
  }
  register(_comment) {
    return this.http.post(`${this.baseUrl}/register`,_comment);
  }
  signin(_comment) {
    return this.http.post(`${this.baseUrlAuth}/signin`,_comment);
  }
  signup(_comment) {
    return this.http.post(`${this.baseUrlAuth}/signup`,_comment);
  }
}
