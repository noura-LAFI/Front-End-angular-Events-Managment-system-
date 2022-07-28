import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UpFileComponent } from './up-file/up-file.component';

const routes: Routes = [
{path:'mm',component:UpFileComponent}

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UpFileRoutingModule {
  
 }
