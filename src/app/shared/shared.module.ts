import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './components/navbar/navbar.component';
import { MapsComponent } from './components/maps/maps.component';
import { AgmCoreModule } from '@agm/core';
import { ModalComponent } from './components/modal/modal.component';
import { ModalModule } from 'ngx-bootstrap/modal';
import {PaginationModule } from 'ngx-bootstrap/pagination';
import { TabsModule } from 'ngx-bootstrap/tabs'




@NgModule({
  declarations: [
    NavbarComponent,
    MapsComponent,
    ModalComponent
  ],
  imports: [
    CommonModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyBV67EAtD3cXeDqSf9EAMv2Zl-QvMWeQ_Y'
    }),
    PaginationModule.forRoot(),
    ModalModule.forRoot(),
    TabsModule.forRoot()

  ], exports: [
    NavbarComponent,
    ModalComponent,
    MapsComponent,
    PaginationModule,
    TabsModule
  ]
})
export class SharedModule { }
