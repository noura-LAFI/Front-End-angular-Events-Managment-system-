import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DetailleComponent } from './detaille/detaille.component';

const routes: Routes = [
{path : '',component:DetailleComponent}


];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DetailleRoutingModule { }
