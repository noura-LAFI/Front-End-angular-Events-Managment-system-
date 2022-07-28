import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UpFileRoutingModule } from './up-file-routing.module';
import { UpFileComponent } from './up-file/up-file.component';
import { AngularFileUploaderModule } from "angular-file-uploader";

@NgModule({
  declarations: [
    UpFileComponent
  ],
  imports: [
    CommonModule,
    UpFileRoutingModule,AngularFileUploaderModule
  ]
})
export class UpFileModule {

 }
