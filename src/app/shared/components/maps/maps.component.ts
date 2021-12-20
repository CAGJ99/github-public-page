import { Component, OnInit, Input } from '@angular/core';
import { IPharmacy } from '../../../core/interfaces/pharmacy.interface';

@Component({
  selector: 'app-maps',
  templateUrl: './maps.component.html',
  styleUrls: ['./maps.component.scss']
})
export class MapsComponent implements OnInit {
  lat: number;
  lng: number;
  zoom: number;

  @Input() pharmacy!: IPharmacy;
  constructor() {
    this.zoom = 18;
    this.lat = 0;
    this.lng = 0;
   }

  ngOnInit(): void {
    this.lat = parseFloat(this.pharmacy.local_lat);
    this.lng = parseFloat(this.pharmacy.local_lng);
  }

}
