import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { HomepageComponent } from './homepage/homepage.component';
import { UserComponent } from './user/user.component';
import { AdminComponent } from './admin/admin.component';
import { ContentComponent } from './content/content.component';
import { DoctorContentComponent } from './doctor-content/doctor-content.component';
import { AuthGuard } from './service/auth.guard';


const routes: Routes = [
  {path:'register',component:RegisterComponent},
  {path:'login',component:LoginComponent},
  {path:'homepage',component:HomepageComponent},
  {path:'user', component:UserComponent},
  {path:'admin', component:AdminComponent, canActivate:[AuthGuard]},
  {path:'content', component:ContentComponent, canActivate:[AuthGuard]},
  {path:'doctorContent', component:DoctorContentComponent, canActivate:[AuthGuard]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
