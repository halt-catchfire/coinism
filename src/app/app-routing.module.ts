import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component'; 
import { HeaderComponent } from './header/header.component'; 
import {ContentComponent} from './content/content.component';
import {SettingComponent} from './setting/setting.component';
const routes: Routes = [
  {path:"login", component: LoginComponent},
  {path:"setting", component: SettingComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
