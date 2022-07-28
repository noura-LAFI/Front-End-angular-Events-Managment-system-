import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WithSideRoutingModule } from './with-side-routing.module';
import { SideBarComponent } from './side-bar/side-bar.component';


@NgModule({
  declarations: [
    SideBarComponent,
  ],
  imports: [
    CommonModule,
    WithSideRoutingModule,
  ]
})
export class WithSideModule { }
