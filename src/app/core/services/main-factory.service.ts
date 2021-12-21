import { Injectable } from '@angular/core';
import { ITableConfig } from '../interfaces/table.interface';

@Injectable({
  providedIn: 'root'
})
export class MainFactoryService {

  public tableConfig ={
    subscriptionTable:{
      header1:'Usuario',
      header2:'Perfil',
      header3:'',
      header4:'',
      columns:2,
      button:{
        icon:'far fa-address-card',
        tittle:'Revisar perfil',
        class:'btn btn-outline-warning',
        classTd:'tdtext'
      }
    },
    userTable:{
      header1:'Usuario',
      header2:'Suscripción',
      header3:'',
      header4:'',
      columns:2,
      button:{
        icon:'fas fa-user-plus',
        tittle:'Más',
        class:'btn btn-outline-secondary',
        classTd:'tdbutton'
      }
    },
  }
}
