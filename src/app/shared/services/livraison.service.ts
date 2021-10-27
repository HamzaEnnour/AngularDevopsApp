import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'environments/environment';

@Injectable({
  providedIn: 'root'
})
export class LivraisonService {

  private readonly baseUrl = `${environment.apiUrl}/apilivraison`;

  constructor(private http: HttpClient) { }

  getAllLivraisons() {
    return this.http.get(`${this.baseUrl}/livraisons`);
  }
  getLivraisonById(_id) {
    return this.http.get(`${this.baseUrl}/livraison/${_id}`);
  }
  createLivraison(_comment) {
    return this.http.post(`${this.baseUrl}/livraison`,_comment);
  }
  updateLivraison(_comment,_id) {
    return this.http.put(`${this.baseUrl}/livraison/${_id}`,_comment);
  }
  deleteLivraison(_id) {
    return this.http.delete(`${this.baseUrl}/livraison/${_id}`);
  }
}
