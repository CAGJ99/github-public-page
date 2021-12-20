import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { IPharmacy } from '../core/interfaces/pharmacy.interface';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PharmacyService {

  constructor(private http: HttpClient) {

   }


  public getPharmacy(): Observable<IPharmacy[]>{
    return this.http.get<IPharmacy[]>(`/ws/getLocales`);
  }

  public getPharmacyInTurn(): Observable<IPharmacy[]>{
    return this.http.get<IPharmacy[]>(`/ws/getLocalesTurnos`);
  }
}
