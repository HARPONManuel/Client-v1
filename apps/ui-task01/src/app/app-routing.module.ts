import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './component/admin/about/about.component';
import { ProductsListComponent } from './component/admin/products/products-list/products-list.component';
import { DashboardComponent } from './component/admin/dashboard/dashboard.component';
<<<<<<< HEAD
import { ProjectComponent } from './component/admin/project/project.component';
import { CanActivateGuardService } from './component/admin/services/can-activate-guard.service';
import { LoginComponent } from './component/login/login.component';
=======
>>>>>>> 29ba402b40ff5fa88f20c46a89e80098fd216f46
import { MyProfileComponent } from './component/my-profile/my-profile.component';
import { ProductsFormComponent } from './component/admin/products/products-form/products-form.component';
import { CategoriesFormComponent } from './component/admin/categories/categories-form/categories-form.component';
import { CategoriesListComponent } from './component/admin/categories/categories-list/categories-list.component';

const routes: Routes = [
  {path: "", redirectTo:"dashboard", pathMatch:"full"},
  {path: "login", component: LoginComponent },
  {path: "dashboard", component: DashboardComponent, canActivate: [ CanActivateGuardService ] },
  {path: "about", component: AboutComponent },
  {path: "my-profile", component: MyProfileComponent},
<<<<<<< HEAD
  {path: "projects", component: ProjectComponent, canActivate: [ CanActivateGuardService ] },

=======
  {
    path: 'categories',
    component: CategoriesListComponent
  },
  {
    path: 'categories/form',
    component: CategoriesFormComponent
  },
  {
    path: 'categories/form/:id',
    component: CategoriesFormComponent
  },
  {
    path: "products", 
    component: ProductsListComponent 
  },
  {
    path: "products/form", 
    component: ProductsFormComponent 
  },
  {
    path: "products/form/:id",
    component: ProductsFormComponent
  },
  {path: "", redirectTo:"dashboard", pathMatch:"full"}
>>>>>>> 29ba402b40ff5fa88f20c46a89e80098fd216f46
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
