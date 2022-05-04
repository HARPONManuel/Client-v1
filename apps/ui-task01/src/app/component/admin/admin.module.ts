import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard/dashboard.component';
import { MyProfileComponent } from '../my-profile/my-profile.component';
import { AboutComponent } from './about/about.component';
import { DashboardService } from './services/dashboard.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ProjectComponent } from './project/project.component';
import { ProductsFormComponent } from './products/products-form/products-form.component';
import { ProductsListComponent } from './products/products-list/products-list.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { CardModule } from 'primeng/card';
import { ToolbarModule } from 'primeng/toolbar';
import { ButtonModule } from 'primeng/button';
import { TableModule } from 'primeng/table';
import { CategoriesService } from '@bluebits/products';
import { InputTextModule } from 'primeng/inputtext';
import { ToastModule } from 'primeng/toast';
import { ConfirmationService, MessageService } from 'primeng/api';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { ColorPickerModule } from 'primeng/colorpicker';
import { InputNumberModule } from 'primeng/inputnumber';
import { DropdownModule } from 'primeng/dropdown';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { InputSwitchModule } from 'primeng/inputswitch';
import { EditorModule } from 'primeng/editor';
import { TagModule } from 'primeng/tag';
import { InputMaskModule } from 'primeng/inputmask';
import { FieldsetModule } from 'primeng/fieldset';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { RouterModule, Routes } from '@angular/router';
import { CategoriesListComponent } from './categories/categories-list/categories-list.component';
import { CategoriesFormComponent } from './categories/categories-form/categories-form.component';
import { LoginComponent } from '../login/login.component';
import { ProjectIDUniqueValidatorDirective } from './services/project-idunique-validator.directive';
import { ClientLocationStatusValidatorDirective } from './services/client-location-status-validator.directive';
import { TeamSizeValidatorDirective } from './services/team-size-validator.directive';

const UX_MODULE = [
  CardModule,
  ToastModule,
  InputTextModule,
  TableModule,
  ToolbarModule,
  ButtonModule,
  ConfirmDialogModule,
  ColorPickerModule,
  InputNumberModule,
  DropdownModule,
  InputTextareaModule,
  InputSwitchModule,
  EditorModule,
  TagModule,
  InputMaskModule,
  FieldsetModule
];

const routes: Routes = [
  {path: "", redirectTo:"dashboard", pathMatch:"full"},
  {path: "login", component: LoginComponent },
  {path: "dashboard", component: DashboardComponent},
  {path: "about", component: AboutComponent },
  {path: "my-profile", component: MyProfileComponent},
  {path: "projects", component: ProjectComponent},
  {path: "categories/form", component: CategoriesFormComponent},
  {path: "products/form", component: ProductsFormComponent},
  {path: "categories/form/:id", component: CategoriesFormComponent},
  {path: "products/form/:id", component: ProductsFormComponent},
  {path: "categories", component: CategoriesListComponent},
  {path: "products", component: ProductsListComponent},
];

@NgModule({
  declarations: [
    DashboardComponent,
    LoginComponent,
    MyProfileComponent,
    AboutComponent,
    ProjectComponent,
    ProductsFormComponent,
    ProductsListComponent,
    CategoriesListComponent,
    CategoriesFormComponent,
    TeamSizeValidatorDirective,
    ClientLocationStatusValidatorDirective,
    ProjectIDUniqueValidatorDirective
  ],
  imports: [ 
    CommonModule, 
    FormsModule,
    BrowserAnimationsModule,
    StoreModule.forRoot({}),
    EffectsModule.forRoot([]),
    RouterModule.forRoot(routes, { initialNavigation: 'enabled' }),
    ReactiveFormsModule,
    ...UX_MODULE
  ],
  exports: [ 
    DashboardComponent, 
    MyProfileComponent, 
    AboutComponent, 
    ProjectComponent,    
    ProductsFormComponent,
    ProductsListComponent,
    LoginComponent,
    TeamSizeValidatorDirective,
    ClientLocationStatusValidatorDirective,
    ProjectIDUniqueValidatorDirective 
   ],
  providers: [ 
    DashboardService,
    CategoriesService,
    MessageService,
    ConfirmationService,
   ]
})
export class AdminModule
{
}
