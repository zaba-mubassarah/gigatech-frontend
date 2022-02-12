import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginLayoutComponent } from './login-layout/login-layout.component';
import {RouterModule, Routes} from "@angular/router";
import {FormsModule} from "@angular/forms";
import { MenuLayoutComponent } from './menu-layout/menu-layout.component';
import { RepositoriesLayoutComponent } from './repositories-layout/repositories-layout.component';
import { TopUserByCountryComponent } from './top-user-by-country/top-user-by-country.component';
import { TopRepositoriesComponent } from './top-repositories/top-repositories.component';
const routes: Routes = [
  {
    path: 'login',
    component: LoginLayoutComponent,
  },
  {
    path: 'menu',
    component: MenuLayoutComponent,
  },
  {
    path: 'repositories',
    component: RepositoriesLayoutComponent,
  },
 {
    path: 'top-user-by-country',
    component: TopUserByCountryComponent,
  },
  {
    path: 'top-repositories',
    component: TopRepositoriesComponent,
  },
  
  ]

@NgModule({
  declarations: [
    LoginLayoutComponent,
    MenuLayoutComponent,
    RepositoriesLayoutComponent,
    TopUserByCountryComponent,
    TopRepositoriesComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
     RouterModule.forChild(routes),
  ]
})
export class LoginModule { }
