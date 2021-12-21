import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './components/navbar/navbar.component';
import { MapsComponent } from './components/maps/maps.component';
import { AgmCoreModule } from '@agm/core';
import { ModalComponent } from './components/modal/modal.component';
import { ModalModule } from 'ngx-bootstrap/modal';
import {PaginationModule } from 'ngx-bootstrap/pagination';
import { TabsModule } from 'ngx-bootstrap/tabs';
import { UserTableComponent } from './components/user-table/user-table.component';
import { UserComponent } from './components/user/user.component'
import { NgxSkeletonLoaderModule } from 'ngx-skeleton-loader';
import { CoreModule } from '../core/core.module';




@NgModule({
  declarations: [
    NavbarComponent,
    MapsComponent,
    ModalComponent,
    UserTableComponent,
    UserComponent
  ],
  imports: [
    CommonModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyBV67EAtD3cXeDqSf9EAMv2Zl-QvMWeQ_Y'
    }),
    PaginationModule.forRoot(),
    ModalModule.forRoot(),
    TabsModule.forRoot(),
    NgxSkeletonLoaderModule,
    CoreModule

  ], exports: [
    NavbarComponent,
    ModalComponent,
    MapsComponent,
    PaginationModule,
    TabsModule,
    UserTableComponent,
    NgxSkeletonLoaderModule
  ]
})
export class SharedModule { }
