import { NgModule } from '@angular/core';
import{ MatDatepickerModule } from '@angular/material/datepicker';
import{ MatNativeDateModule } from '@angular/material/core';
import { EditProfileRoutingModule } from './edit-profile-routing.module';
import { EditProfileComponent } from './edit-profile/edit-profile.component';
import {MatInputModule} from '@angular/material/input';

@NgModule({
  declarations: [
    EditProfileComponent
  ],
  imports: [
    
    EditProfileRoutingModule,MatDatepickerModule,MatNativeDateModule,MatInputModule
  
  ]
})
export class EditProfileModule { }
