import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'environments/environment';

@Injectable({
  providedIn: 'root'
})
export class FeedbackService {
  private readonly baseUrl = `${environment.apiUrl}/apicomment`;

  constructor(private http: HttpClient) { }

  getAllComment() {
    return this.http.get(`${this.baseUrl}/comments`);
  }
  getCommentById(_id) {
    return this.http.get(`${this.baseUrl}/comment/${_id}`);
  }
  createComment(_comment) {
    return this.http.post(`${this.baseUrl}/comment`,_comment);
  }
  updateComment(_comment,_id) {
    return this.http.put(`${this.baseUrl}/comment/${_id}`,_comment);
  }
  deleteComment(_id) {
    return this.http.delete(`${this.baseUrl}/comment/${_id}`);
  }
}
