import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Home1Component } from './front/home1/home1.component';
import { AboutComponent } from './front/about/about.component';
import { ContactComponent } from './front/contact/contact.component';
import { CreatComptComponent } from './front/creat-compt/creat-compt.component';
import { HomeComponent } from './front/home/home.component';
import { TopAgencyComponent } from './front/top-agency/top-agency.component';
import { SideBarComponent } from './with-side/side-bar/side-bar.component';
const routes: Routes = [
{path:'',component:HomeComponent},
{path:'contact',component:ContactComponent},
{path: 'creatCompt' ,component:CreatComptComponent},
{path: 'about' ,component:AboutComponent},
{path: 'topAgency' ,component:TopAgencyComponent},
{path: 'home1' ,component:Home1Component}
,{path: 'side' ,component:SideBarComponent,children:[
  {path:'createEv',loadChildren:()=>import('../app/create-event/create-event.module').then(m=>m.CreateEventModule)}
]},
{path: 'side' ,component:SideBarComponent,children:[
  {path:'MyEv',loadChildren:()=>import('../app/my-ev/my-ev.module').then(m=>m.MyEvModule)}
]},
{path:'home1' ,component:Home1Component,children:[
  {path:'Map',loadChildren:()=>import('../app/map/map.module').then(m=>m.MapModule)}
]},
{path:'side' ,component:SideBarComponent,children:[
  {path:'Doc',loadChildren:()=>import('../app/video-photos-ev/video-photos-ev.module').then(m=>m.VideoPhotosEvModule)}
]},
{path:'side' ,component:SideBarComponent,children:[
  {path:'EditProf',loadChildren:()=>import('../app/edit-profile/edit-profile.module').then(m=>m.EditProfileModule)}
]},
{path:'side' ,component:SideBarComponent,children:[
  {path:'container',loadChildren:()=>import('../app/container/container.module').then(m=>m.ContainerModule)}
]},
{path:'side' ,component:SideBarComponent,children:[
  {path:'detaille',loadChildren:()=>import('../app/detaille/detaille.module').then(m=>m.DetailleModule)}
]},
]
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule
  ]
})
export class AppRoutingModule { }
