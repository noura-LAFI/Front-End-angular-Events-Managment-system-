import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FrontModule } from './front/front.module';
import { WithSideModule } from './with-side/with-side.module';
import { MapModule } from './map/map.module';
import { UpFileModule } from './up-file/up-file.module';
import { ContainerModule } from './container/container.module';
import { AngularFileUploaderModule } from "angular-file-uploader";
import { SignUpComponent } from './sign-up/sign-up.component';
 @NgModule({ 
   imports: [
    BrowserModule,
    AppRoutingModule ,
BrowserAnimationsModule,FrontModule,WithSideModule,MapModule,UpFileModule , ContainerModule,AngularFileUploaderModule
  ],
  declarations: [
    AppComponent,
    SignUpComponent, 
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
