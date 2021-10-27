import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'environments/environment';

@Injectable({
  providedIn: 'root'
})
export class EventService {

  private readonly baseUrl = `${environment.apiUrl}/api/event`;

  constructor(private http: HttpClient) { }

  getEvent() {
    return this.http.get(`${this.baseUrl}/`);
  }
  createEvent(_comment) {
    return this.http.post(`${this.baseUrl}`,_comment);
  }
  deleteevent(_id) {
    return this.http.delete(`${this.baseUrl}/${_id}`);
  }
}
