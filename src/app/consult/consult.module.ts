import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ConsultRoutingModule } from './consult-routing.module';
import { ConsultComponent } from './consult.component';
import { SharedModule } from '../shared/shared.module';
import { CoreModule } from '../core/core.module';


@NgModule({
  declarations: [
    ConsultComponent
  ],
  imports: [
    CommonModule,
    ConsultRoutingModule,
    SharedModule,
    CoreModule
  ],
})
export class ConsultModule { }
