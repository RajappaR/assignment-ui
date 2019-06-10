import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ErrorComponent } from './core/errors/error-component/error.component';
import { AuthGuard } from './core/auth/guard/auth.guard';
import { LoginComponent } from './core/auth/login/login.component';
import { UsersComponent } from './pages/users/users.component';
import { AddUserComponent } from './pages/add-user/add-user.component';
import { CanActivate } from '@angular/router/src/utils/preactivation';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'users',
    pathMatch: 'full',
    canActivate: [AuthGuard]
  },
  {
    path:'add-user',
    component:AddUserComponent,
    canActivate:[AuthGuard]
  },
  {
    path: 'login',
    component: LoginComponent
  },
  // {
  //   path: '**',
  //   redirectTo: '/error',
  //   pathMatch: 'full'
  // },
  {
    path: 'error',
    component: ErrorComponent
  },
  {
    path:'users',
    component:UsersComponent,
    canActivate: [AuthGuard]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
