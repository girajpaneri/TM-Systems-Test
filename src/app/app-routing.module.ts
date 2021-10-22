import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './services/auth.guard';
import { LogOutComponent } from './views/log-out/log-out.component';

const routes: Routes = [
  {
    path:'',
    loadChildren:()=> import('./views/login/login.module').then(m=>m.LoginModule)
  },
  {
    path:'',
    loadChildren:()=> import('./views/user/user.module').then(m=>m.UserModule),    
    canActivate: [AuthGuard]
  },
  {
    path:'logout',
    component:LogOutComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
