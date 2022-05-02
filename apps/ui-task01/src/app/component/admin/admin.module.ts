import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard/dashboard.component';
import { MyProfileComponent } from '../my-profile/my-profile.component';
import { AboutComponent } from './about/about.component';
import { DashboardService } from './services/dashboard.service';
import { FormsModule } from '@angular/forms';
<<<<<<< HEAD
=======

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CardModule } from 'primeng/card';
import { FieldsetModule } from 'primeng/fieldset';
import { HttpClientModule } from '@angular/common/http';
import { ToolbarModule } from 'primeng/toolbar';
import { ButtonModule } from 'primeng/button';
import { TableModule } from 'primeng/table';
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
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { ProductsListComponent } from './products/products-list/products-list.component';
import { ProductsFormComponent } from './products/products-form/products-form.component';
import { CategoriesFormComponent } from './categories/categories-form/categories-form.component';
import { CategoriesListComponent } from './categories/categories-list/categories-list.component';
import { CategoriesService } from '@bluebits/products';
import { AppRoutingModule } from '../../app-routing.module';
import { AppComponent } from '../../app.component';

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

>>>>>>> 29ba402b40ff5fa88f20c46a89e80098fd216f46

@NgModule({
  declarations: [
  ],
<<<<<<< HEAD
  imports: [ CommonModule, FormsModule],
  exports: [ DashboardComponent, MyProfileComponent, AboutComponent, ProjectComponent ],
  providers: [ DashboardService ]
=======
  imports: [ 
    CommonModule,
    StoreModule.forRoot({}),
    EffectsModule.forRoot([]),
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    ...UX_MODULE ],
  exports: [],
  providers: [
    CategoriesService, 
    DashboardService,
    MessageService,
    ConfirmationService, ],
  bootstrap: [AppComponent]
>>>>>>> 29ba402b40ff5fa88f20c46a89e80098fd216f46
})
export class AdminModule
{
}
