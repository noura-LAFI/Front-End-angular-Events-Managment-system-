import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatInputModule} from '@angular/material/input';
import{ MatDatepickerModule } from '@angular/material/datepicker';
import{ MatNativeDateModule } from '@angular/material/core';
import { MyEvRoutingModule } from './my-ev-routing.module';
import { MyEvComponent } from './my-ev/my-ev.component';
import {MatTabsModule} from '@angular/material/tabs';
@NgModule({
  declarations: [
    MyEvComponent
  ],
  imports: [
    CommonModule,
    MyEvRoutingModule,MatInputModule,MatNativeDateModule,MatDatepickerModule,MatTabsModule

  ]
})
export class MyEvModule { }
