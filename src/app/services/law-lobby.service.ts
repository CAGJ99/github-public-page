import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class LawLobbyService {

  headers:HttpHeaders
  constructor(private http: HttpClient) {
    this.headers = new HttpHeaders({
      'Api-Key': '$2y$10$pY5SUGYmydGoil05Rk3dMuukVfG5pOP4m8UO4EPgvhg',
      'Content-Type': 'application/json'
    })
   }
   
  public getAll(){
    return this.http.get(environment.apiUrl,{ headers: this.headers });
  }
}
