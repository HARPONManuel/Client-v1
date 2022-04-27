import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './component/admin/about/about.component';
import { DashboardComponent } from './component/admin/dashboard/dashboard.component';
import { ProjectComponent } from './component/admin/project/project.component';
import { MyProfileComponent } from './component/my-profile/my-profile.component';

const routes: Routes = [
  {path: "dashboard", component: DashboardComponent },
  {path: "about", component: AboutComponent },
  { path: "my-profile", component: MyProfileComponent},
  {path: "projects", component: ProjectComponent },
  {path: "", redirectTo:"dashboard", pathMatch:"full"}
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { initialNavigation: 'enabled' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
