import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DetailleRoutingModule } from './detaille-routing.module';
import { DetailleComponent } from './detaille/detaille.component';


@NgModule({
  declarations: [
    DetailleComponent
  ],
  imports: [
    CommonModule,
    DetailleRoutingModule
  ]
})
export class DetailleModule { }
