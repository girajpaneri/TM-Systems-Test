import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterModule, Routes } from '@angular/router';
import { UserComponent } from './user.component';


const routes: Routes = [
  {
    path:'user',
    component:UserComponent,
    loadChildren:()=> import('../user/dashboard/dashboard.module').then(m=>m.DashboardModule)
  }
];

@NgModule({
  declarations: [
    UserComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class UserModule { }
