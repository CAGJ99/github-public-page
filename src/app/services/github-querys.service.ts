import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class GithubQuerysService {

  constructor(private http: HttpClient) { }

  public getUsers(){
    return this.http.get(`${environment.apiUrl}users`);
  }

  public getSubscription(url:string){
    return this.http.get(url);
  }
}
