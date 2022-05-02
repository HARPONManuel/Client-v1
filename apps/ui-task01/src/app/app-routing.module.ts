import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './component/admin/about/about.component';
import { DashboardComponent } from './component/admin/dashboard/dashboard.component';
import { ProjectComponent } from './component/admin/project/project.component';
import { CanActivateGuardService } from './component/admin/services/can-activate-guard.service';
import { LoginComponent } from './component/login/login.component';
import { MyProfileComponent } from './component/my-profile/my-profile.component';

const routes: Routes = [
  {path: "", redirectTo:"dashboard", pathMatch:"full"},
  {path: "login", component: LoginComponent },
  {path: "dashboard", component: DashboardComponent, canActivate: [ CanActivateGuardService ] },
  {path: "about", component: AboutComponent },
  {path: "my-profile", component: MyProfileComponent},
  {path: "projects", component: ProjectComponent, canActivate: [ CanActivateGuardService ] },

];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
