import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './component/admin/about/about.component';
import { ProductsListComponent } from './component/admin/products/products-list/products-list.component';
import { DashboardComponent } from './component/admin/dashboard/dashboard.component';
import { CanActivateGuardService } from './component/admin/services/can-activate-guard.service';
import { LoginComponent } from './component/login/login.component';
import { MyProfileComponent } from './component/my-profile/my-profile.component';
import { ProductsFormComponent } from './component/admin/products/products-form/products-form.component';
import { CategoriesFormComponent } from './component/admin/categories/categories-form/categories-form.component';
import { CategoriesListComponent } from './component/admin/categories/categories-list/categories-list.component';
import { ProjectComponent } from './component/admin/project/project.component';

const routes: Routes = [
  {path: "", redirectTo:"dashboard", pathMatch:"full"},
  {path: "login", component: LoginComponent },
  {path: "dashboard", component: DashboardComponent, canActivate: [ CanActivateGuardService ], data: { expectedRole: "Admin" }  },
  {path: "about", component: AboutComponent },
  {path: "my-profile", component: MyProfileComponent},
  {path: "projects", component: ProjectComponent, canActivate: [ CanActivateGuardService ], data: { expectedRole: "Admin" }  },
  {path: "categories/form", component: CategoriesFormComponent, canActivate: [ CanActivateGuardService ], data: { expectedRole: "Admin" }  },
  {path: "products/form", component: ProductsFormComponent, canActivate: [ CanActivateGuardService ], data: { expectedRole: "Admin" }  },
  {path: "categories/form/:id", component: CategoriesFormComponent, canActivate: [ CanActivateGuardService ], data: { expectedRole: "Admin" }  },
  {path: "products/form/:id", component: ProductsFormComponent, canActivate: [ CanActivateGuardService ], data: { expectedRole: "Admin" }  },
  {path: "categories", component: CategoriesListComponent, canActivate: [ CanActivateGuardService ], data: { expectedRole: "Admin" }  },
  {path: "products", component: ProductsListComponent, canActivate: [ CanActivateGuardService ], data: { expectedRole: "Admin" }  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { initialNavigation: 'enabled' }), RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
