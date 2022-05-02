<<<<<<< HEAD
=======
import { CardModule } from 'primeng/card';
import { FieldsetModule } from 'primeng/fieldset';
>>>>>>> 29ba402b40ff5fa88f20c46a89e80098fd216f46
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { JwtModule } from '@auth0/angular-jwt';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AdminModule } from './component/admin/admin.module';
<<<<<<< HEAD
import { JwtInterceptorService } from './component/admin/services/jwt-interceptor.service';
import { JwtUnAuthorizedInterceptorService } from './component/admin/services/jwt-un-authorized-interceptor.service';
import { LoginComponent } from './component/login/login.component';
=======
import { RouterModule, Routes } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { CategoriesService } from '@bluebits/products';
import { ConfirmationService, MessageService } from 'primeng/api';
import { JwtInterceptor } from '@bluebits/users';
import { InputMaskModule } from 'primeng/inputmask';
import { TagModule } from 'primeng/tag';
import { EditorModule } from 'primeng/editor';
import { InputSwitchModule } from 'primeng/inputswitch';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { DropdownModule } from 'primeng/dropdown';
import { InputNumberModule } from 'primeng/inputnumber';
import { ColorPickerModule } from 'primeng/colorpicker';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { ButtonModule } from 'primeng/button';
import { SelectButtonModule } from 'primeng/selectbutton';
import { ToolbarModule } from 'primeng/toolbar';
import { TableModule } from 'primeng/table';
import { InputTextModule } from 'primeng/inputtext';
import { ToastModule } from 'primeng/toast';
import { DashboardComponent } from './component/admin/dashboard/dashboard.component';
import { AboutComponent } from './component/admin/about/about.component';
import { MyProfileComponent } from './component/my-profile/my-profile.component';
import { CategoriesListComponent } from './component/admin/categories/categories-list/categories-list.component';
import { CategoriesFormComponent } from './component/admin/categories/categories-form/categories-form.component';
import { ProductsListComponent } from './component/admin/products/products-list/products-list.component';
import { ProductsFormComponent } from './component/admin/products/products-form/products-form.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


const UX_MODULE = [
  CardModule,
  ToastModule,
  InputTextModule,
  TableModule,
  ToolbarModule,
  SelectButtonModule,
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
  {path: "dashboard", component: DashboardComponent },
  {path: "about", component: AboutComponent },
  {path: "my-profile", component: MyProfileComponent},
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
];
>>>>>>> 29ba402b40ff5fa88f20c46a89e80098fd216f46

@NgModule({
  declarations: [
    AppComponent,
<<<<<<< HEAD
    LoginComponent],
=======
    DashboardComponent,
    MyProfileComponent,
    AboutComponent,
    ProductsListComponent,
    ProductsFormComponent,
    CategoriesListComponent,
    CategoriesFormComponent,
  ],
>>>>>>> 29ba402b40ff5fa88f20c46a89e80098fd216f46
  imports: [
    AdminModule,
    BrowserModule,
<<<<<<< HEAD
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    AdminModule,
    JwtModule.forRoot({
      config: {
        tokenGetter: () =>
        {
          return (sessionStorage.getItem("currentUser") ? JSON.parse(sessionStorage.getItem("currentUser") as any).token : null)
        }
      }
    })
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: JwtInterceptorService,
      multi: true
    },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: JwtUnAuthorizedInterceptorService,
      multi: true
    }
=======
    BrowserAnimationsModule,
    HttpClientModule,
    AppRoutingModule,
    StoreModule.forRoot({}),
    EffectsModule.forRoot([]),
    FormsModule,
    ReactiveFormsModule,
    ...UX_MODULE
  ],

  providers: [
    CategoriesService,
    MessageService,
    ConfirmationService,
    { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true }
>>>>>>> 29ba402b40ff5fa88f20c46a89e80098fd216f46
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
